import { Task } from "../interface/Task";

// 1日の時間と1時間の分数を定数として定義
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

// 実行時間の差分を計算し、時間、分、秒の形式で返す関数
const calcDiffExecutionTime = (diff: number) => {
	const hours = Math.floor(diff / 1000 / 60 / 60);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	return { hours, minutes, seconds };
};

// 配列の指定された範囲の要素を新しい値で更新する関数
const updateOriginalArray = (
	arr: number[],
	start: number,
	count: number,
	newHourValue: number
): void => {
	for (let i = start; i < start + count; i++) {
		arr[i] = newHourValue;
	}
};

// タスクの開始時間を調整する関数
// 今日の日付と一致しない場合は、開始時間を今日の0時に設定
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

// 開始時間と終了時間の差分を計算する関数
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

// タスクの実行時間を計算する関数
const calculateExecutionTime = (task: Task) => {
	const { startTime, endTime } = task;
	const diff = (endTime?.getTime() || 0) - (startTime?.getTime() || 0);
	return calcDiffExecutionTime(diff);
};

// タスクの分布を計算する関数
export const calculateTaskDistribution = (tasks: Task[]) => {
	// 1日の各時間帯におけるタスクの実行時間を格納する配列を初期化
	const hourlyDurations = new Array(HOURS_IN_DAY).fill(0);
	const refinedStartTimeTasks = refineStartTime(tasks);

	refinedStartTimeTasks.forEach((task) => {
		if (!task || !task.startTime || !task.endTime) return;

		const executionTime = calculateExecutionTime(task);
		const { startTime, endTime } = task;
		const startHour = startTime.getHours();
		const endHour = endTime.getHours();

		// 開始時間と終了時間が同じ時間帯の場合
		if (startHour === endHour && typeof startHour === "number") {
			hourlyDurations[startHour] += executionTime.minutes;
		} else {
			// 開始時間と終了時間が異なる時間帯の場合
			const startAndEndExecutionTime = diffStarAndEndTime(startTime, endTime);
			const fullyExecutionHour = executionTime.hours - 1;
			updateOriginalArray(
				hourlyDurations,
				startHour + 1,
				fullyExecutionHour,
				MINUTES_IN_HOUR
			);
			// 開始時間帯の残りの分数を追加
			hourlyDurations[startHour] +=
				MINUTES_IN_HOUR - startAndEndExecutionTime.startExecutionTime.minutes;
			// 終了時間帯の分数を追加
			hourlyDurations[endHour] +=
				startAndEndExecutionTime.endExecutionTime.minutes;
		}
	});

	// 各時間帯のタスク実行時間を格納した配列を返す
	return hourlyDurations;
};
