import { useRecoilState } from "recoil";
import { quickTasksState } from "../stores/quickTaskAtom";
import { QuickTask } from "../interface/QuickTask";

export const useHandleQuickTaskExecution = (quickTask: QuickTask) => {
	const [, setQuickTasks] = useRecoilState(quickTasksState);
	const handleQuickTaskExecution = () => {
		const quickTaskString = localStorage.getItem("quickTasks");
		let currentQuickTasks = quickTaskString ? JSON.parse(quickTaskString) : [];

		currentQuickTasks = currentQuickTasks.map((task: QuickTask) => {
			if (task.id === quickTask.id) {
				return {
					...task,
					status: task.status === "done" ? "todo" : "done",
					created: new Date(task.created),
				};
			} else {
				return {
					...task, created:new Date(task.created)
				}
			}
		});

		setQuickTasks(currentQuickTasks);
		localStorage.setItem("quickTasks", JSON.stringify(currentQuickTasks));
	};
	return handleQuickTaskExecution;
};
