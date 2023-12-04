import { QuickTask } from "../interface/QuickTask";
import { useRecoilState } from "recoil";
import { quickTasksState } from "../stores/quickTaskAtom";
import { sortAndSetQuickTasksToGlobalState } from "../util/sortAndSetQuickTasksToGlobalState";
import { getQuickTasksFromLocalStorage } from "../dataAccess/getQuickTasksFromLocalStorage";

export const useLoadQuickTasks = (): [QuickTask[], () => void] => {
	const [quickTask, setQuickTasks] = useRecoilState(quickTasksState);
	const loadQuickTasks = () => {
		const loadedQuickTasks = getQuickTasksFromLocalStorage();

		loadedQuickTasks.forEach((task) => {
			task.created = new Date(task.created);
		});
		sortAndSetQuickTasksToGlobalState(loadedQuickTasks, setQuickTasks);
	};

	return [quickTask, loadQuickTasks];
};
