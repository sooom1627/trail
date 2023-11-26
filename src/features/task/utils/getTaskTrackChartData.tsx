import { Task } from "../interface/Task";

const calcDiffExecutionTime = (diff: number) => {
	const hours = Math.floor(diff / 1000 / 60 / 60);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	return { hours, minutes, seconds };
};

const updateOriginalArray = (
	arr: number[],
	start: number,
	count: number,
	newHourValue: number
): void => {
	// 指定された範囲の要素を更新
	for (let i = start; i < start + count; i++) {
		arr[i] = newHourValue;
	}
};

const refineStartTime = (tasks: Task[]) => {
	const refinedStartTimeTasks = tasks.map((task) => {
		const today = new Date();

		if (task.startTime && task.startTime.getDate() === today.getDate()) {
			return { ...task };
		} else if (task.startTime && task.startTime.getDate() !== today.getDate()) {
			const todayStart = new Date();
			todayStart.setHours(0, 0, 0, 0);
			return { ...task, startTime: todayStart };
		}
	});

	return refinedStartTimeTasks;
};

const diffStarAndEndTime = (startTime: Date, endTime: Date) => {
	const startHour = startTime?.getHours();
	const endHour = endTime?.getHours();

	const startHourTime = new Date();
	const endHourTime = new Date();
	startHourTime.setHours(startHour, 0, 0, 0);
	endHourTime.setHours(endHour, 0, 0, 0);

	const startDiff = (startTime?.getTime() || 0) - startHourTime.getTime();
	const endDiff = (endTime?.getTime() || 0) - endHourTime.getTime();
	const startExecutionTime = calcDiffExecutionTime(startDiff);
	const endExecutionTime = calcDiffExecutionTime(endDiff);

	return { startExecutionTime, endExecutionTime };
};

export const calculateTaskDistribution = (tasks: Task[]) => {
	const hourlyDurations = new Array(24).fill(0);
	const refinedStartTimeTasks = refineStartTime(tasks);

	refinedStartTimeTasks.forEach((task) => {
		if (!task || !task.startTime || !task.endTime) return;

		const { startTime, endTime } = task;
		const startHour = startTime.getHours();
		const endHour = endTime.getHours();
		const diff = (endTime.getTime() || 0) - (startTime.getTime() || 0);
		const executionTime = calcDiffExecutionTime(diff);

		if (startHour === endHour && typeof startHour === "number") {
			hourlyDurations[startHour] += executionTime.minutes;
		} else {
			const startAndEndExecutionTime = diffStarAndEndTime(startTime, endTime);
			const fullyExecutionHour = executionTime.hours - 1;
			updateOriginalArray(
				hourlyDurations,
				startHour + 1,
				fullyExecutionHour,
				60
			);
			hourlyDurations[startHour] +=
				60 - startAndEndExecutionTime.startExecutionTime.minutes;
			hourlyDurations[endHour] +=
				startAndEndExecutionTime.endExecutionTime.minutes;
		}
		console.log(task);
		console.log(hourlyDurations);
	});

	return hourlyDurations;
};
