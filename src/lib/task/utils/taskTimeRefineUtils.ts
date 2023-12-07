import { Task } from "../interface/Task";
import { isSameDay, resetToStartOfDay } from "./dateUtils";

// タスクの一時停止時間をリセットする関数
export const resetTaskPauses = (task: Task, today: Date) => {
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
export const resetTaskStartTime = (task: Task, today: Date) => {
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