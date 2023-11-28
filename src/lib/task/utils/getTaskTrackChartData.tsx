import { Task } from "../interface/Task";

// 1日の時間と1時間の分数を定数として定義
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

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

// タスクの分布を計算する関数
export const calculateTaskDistribution = (tasks: Task[]) => {
	// 1日の各時間帯におけるタスクの実行時間を格納する配列を初期化
	const hourlyDurations = new Array(HOURS_IN_DAY).fill(0);
	const refinedStartTimeTasks = refineStartTime(tasks);

	refinedStartTimeTasks.forEach((task) => {
		if (!task || !task.startTime || !task.endTime) return;

		const { startTime, endTime } = task;
		const startHour = startTime.getHours();
		const startMinutes = startTime.getMinutes();
		const endHour = endTime.getHours();
		const endMinutes = endTime.getMinutes();

		// 開始時間と終了時間が同じ時間帯の場合
		if (startHour === endHour && typeof startHour === "number") {
			hourlyDurations[startHour] += endMinutes - startMinutes;
		} else {
			// 開始時間と終了時間が異なる時間帯の場合
			for (let hour = startHour + 1; hour < endHour; hour++) {
				hourlyDurations[hour] += 60;
			}
			// 開始時間帯の残りの分数を追加
			hourlyDurations[startHour] += MINUTES_IN_HOUR - startMinutes;
			// 終了時間帯の分数を追加
			hourlyDurations[endHour] += endMinutes;
		}
	});

	// 各時間帯のタスク実行時間を格納した配列を返す
	return hourlyDurations;
};
