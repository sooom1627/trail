import { Task } from "../interface/Task";

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

// 同じ日付かどうかを判定する関数
const isSameDay = (date1: Date, date2: Date) => {
	return date1.getDate() === date2.getDate();
};

// 日付を日の開始時刻にリセットする関数
const resetToStartOfDay = () => {
	const resetDate = new Date();
	resetDate.setHours(0, 0, 0, 0);
	return resetDate;
};

// タスクの一時停止時間をリセットする関数
const resetTaskPauses = (task: Task, today: Date) => {
	if (!task.pauses || task.pauses.length === 0) return task;
	return {
		...task,
		pauses: task.pauses
			.filter((pause) => pause.restart && isSameDay(pause.restart, today))
			.map((pause) => {
				if (pause.pause && !isSameDay(pause.pause, today)) {
					return { ...pause, pause: resetToStartOfDay() };
				}
				return pause;
			}),
	};
};

// タスクの開始時間をリセットする関数
const resetTaskStartTime = (task: Task, today: Date) => {
	if (task.startTime && !isSameDay(task.startTime, today)) {
		return { ...task, startTime: resetToStartOfDay() };
	}
	return task;
};

// タスクの一時停止時間と開始時間をリセットする関数
export const refineTaskTime = (tasks: Task[]) => {
	const today = new Date();
	return tasks.map((task) =>
		resetTaskStartTime(resetTaskPauses(task, today), today)
	);
};

// 開始時間と終了時間から作業時間を計算する関数
const calculateWorkDuration = (
	startHour: number,
	startMinutes: number,
	endHour: number,
	endMinutes: number
) => {
	let hourlyDurations = new Array(HOURS_IN_DAY).fill(0);
	if (startHour === endHour) {
		hourlyDurations[startHour] += endMinutes - startMinutes;
	} else {
		for (let hour = startHour + 1; hour < endHour; hour++) {
			hourlyDurations[hour] += MINUTES_IN_HOUR;
		}
		hourlyDurations[startHour] += MINUTES_IN_HOUR - startMinutes;
		hourlyDurations[endHour] += endMinutes;
	}
	return hourlyDurations;
};

// 一時停止時間から作業時間を減算する関数
const subtractPauseDuration = (
	hourlyDurations: number[],
	pauses?: { pause: Date; restart?: Date }[]
) => {
	if (pauses) {
		pauses.forEach((pause) => {
			if (pause.pause && pause.restart) {
				const pauseHour = pause.pause.getHours();
				const pauseMinutes = pause.pause.getMinutes();
				const restartHour = pause.restart.getHours();
				const restartMinutes = pause.restart.getMinutes();
				if (pauseHour === restartHour) {
					hourlyDurations[pauseHour] -= restartMinutes - pauseMinutes;
				} else {
					for (let hour = pauseHour + 1; hour < restartHour; hour++) {
						hourlyDurations[hour] -= MINUTES_IN_HOUR;
					}
					hourlyDurations[pauseHour] -= MINUTES_IN_HOUR - pauseMinutes;
					hourlyDurations[restartHour] -= restartMinutes;
				}
			}
		});
	}
	return hourlyDurations;
};

// 全体の作業時間を計算する関数
const calculateDuration = (
	startHour: number,
	startMinutes: number,
	endHour: number,
	endMinutes: number,
	pauses?: { pause: Date; restart?: Date }[]
) => {
	let hourlyDurations = calculateWorkDuration(
		startHour,
		startMinutes,
		endHour,
		endMinutes
	);
	return subtractPauseDuration(hourlyDurations, pauses);
};

export const calculateTaskDistribution = (tasks: Task[]) => {
	const refinedStartTimeTasks = refineTaskTime(tasks);
	console.log(refinedStartTimeTasks);
	let hourlyDurations = new Array(HOURS_IN_DAY).fill(0);

	refinedStartTimeTasks.forEach((task) => {
		if (task && task.startTime && task.endTime) {
			const { startTime, endTime } = task;
			const startHour = startTime.getHours();
			const startMinutes = startTime.getMinutes();
			const endHour = endTime.getHours();
			const endMinutes = endTime.getMinutes();
			const taskHourlyDurations = calculateDuration(
				startHour,
				startMinutes,
				endHour,
				endMinutes,
				task.pauses
			);
			hourlyDurations = hourlyDurations.map(
				(val, index) => val + taskHourlyDurations[index]
			);
		}
	});

	return hourlyDurations;
};
