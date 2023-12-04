import { v4 as uuidv4 } from "uuid";
import { QuickTask } from "../interface/QuickTask";
import { useRecoilState } from "recoil";
import { quickTasksState } from "../stores/quickTaskAtom";
import { getQuickTasksFromLocalStorage } from "../dataAccess/getQuickTasksFromLocalStorage";
import { saveQuickTasksFromLocalStorage } from "../dataAccess/saveQuickTasksFromLocalStorage";
import { sortAndSetQuickTasksToGlobalState } from "../util/sortAndSetQuickTasksToGlobalState";

export const useSaveQuickTasks = () => {
	const [, setQuickTasks] = useRecoilState(quickTasksState);
	const saveQuickTask = (title: string) => {
		const currentQuickTasks = getQuickTasksFromLocalStorage();

		const newQuickTask: QuickTask = {
			id: uuidv4(),
			title,
			status: "todo",
			created: new Date(),
		};

		let updateQuickTasks = [...currentQuickTasks, newQuickTask];
		saveQuickTasksFromLocalStorage(updateQuickTasks);
		sortAndSetQuickTasksToGlobalState(updateQuickTasks, setQuickTasks);
	};

	return saveQuickTask;
};
