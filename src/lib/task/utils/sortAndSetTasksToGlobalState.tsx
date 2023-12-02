import { Task } from "../interface/Task";

// src/lib/task/helpers.ts
export const sortAndSetTasksToGlobalState = (
	tasks: Task[],
	setTasks: Function
) => {
	const sortedTasks = tasks.sort(
		(a, b) => b.created.getTime() - a.created.getTime()
	);
	setTasks(sortedTasks);
};
