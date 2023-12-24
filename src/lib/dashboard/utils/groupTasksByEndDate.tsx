import { Task } from "@/lib/task/interface/Task";

export const groupTasksByEndDate = (
	tasks: Task[]
): { [key: string]: Task[] } => {
	const groupedTasks: { [key: string]: Task[] } = {};

	tasks.forEach((task) => {
		if (task.endTime) {
			const dateKey = task.endTime.toISOString().split("T")[0];
			if (!groupedTasks[dateKey]) {
				groupedTasks[dateKey] = [];
			}
			groupedTasks[dateKey].push(task);
		}
	});

	return groupedTasks;
};
