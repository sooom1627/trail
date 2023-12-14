import { useRecoilState } from "recoil";
import { quickTasksState } from "../stores/quickTaskAtom";
import { QuickTask } from "../interface/QuickTask";
import { getQuickTasksFromLocalStorage } from "../dataAccess/getQuickTasksFromLocalStorage";
import { saveQuickTasksFromLocalStorage } from "../dataAccess/saveQuickTasksFromLocalStorage";
import { sortAndSetQuickTasksToGlobalState } from "../util/sortAndSetQuickTasksToGlobalState";

export const useHandleQuickTaskExecution = () => {
	const [, setQuickTasks] = useRecoilState(quickTasksState);
	const handleQuickTaskExecution = (quickTask: QuickTask) => {
		const currentQuickTasks =  getQuickTasksFromLocalStorage()

		let updatedQuickTasks = currentQuickTasks.map((task: QuickTask) => {
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
		}) as QuickTask[];

		saveQuickTasksFromLocalStorage(updatedQuickTasks)
		sortAndSetQuickTasksToGlobalState(updatedQuickTasks, setQuickTasks)
		
	};
	return handleQuickTaskExecution;
};
