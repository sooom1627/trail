import { v4 as uuidv4 } from "uuid";
import { QuickTask } from "../interface/QuickTask";
import { useRecoilState } from "recoil";
import { quickTasksState } from "../stores/quickTaskAtom";

export const useSaveQuickTasks = () => {
	const [, setQuickTasks] = useRecoilState(quickTasksState);
	const saveQuickTask = (title: string) => {
		const quickTaskString = localStorage.getItem("quickTasks");
		const currentQuickTasks = quickTaskString
			? (JSON.parse(quickTaskString).map((task: QuickTask) => ({
					...task,
					created: new Date(task.created),
			  })) as QuickTask[])
			: [];

		const newQuickTask: QuickTask = {
			id: uuidv4(),
			title,
			status: "todo",
			created: new Date(),
		};

		let updateQuickTasks = [...currentQuickTasks, newQuickTask];
		localStorage.setItem("quickTasks", JSON.stringify(updateQuickTasks));
		setQuickTasks(updateQuickTasks);
	};

	return saveQuickTask;
};
