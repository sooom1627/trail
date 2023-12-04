import { QuickTask } from "../interface/QuickTask";
import { useRecoilState } from "recoil";
import { quickTasksState } from "../stores/quickTaskAtom";
import { sortAndSetQuickTasksToGlobalState } from "../util/sortAndSetQuickTasksToGlobalState";

export const useLoadQuickTasks = (): [QuickTask[], () => void] => {
	const [quickTask, setQuickTasks] = useRecoilState(quickTasksState);
	const loadQuickTasks = () => {
		const quickTaskString = localStorage.getItem("quickTasks");
		let loadedQuickTasks = quickTaskString
			? (JSON.parse(quickTaskString) as QuickTask[])
			: [];

		loadedQuickTasks.forEach((task) => {
			task.created = new Date(task.created);
		});
		sortAndSetQuickTasksToGlobalState(loadedQuickTasks, setQuickTasks);
	};

	return [quickTask, loadQuickTasks];
};
