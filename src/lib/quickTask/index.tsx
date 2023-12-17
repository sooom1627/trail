import { QuickTaskList } from "./feature/getQuickTask/QuickTaskList";
import { AddQuickTaskForm } from "./feature/addQuickTask/AddQuickTaskForm";
import { useEffect, useState } from "react";
import { useLoadQuickTasks } from "./hooks/useLoadQuickTasks";
import { Empty } from "./components/empty/Empty";
import { PanelTitle } from "./components/quickTask/PanelTitle";

export const QuickTaskPanel = () => {
	const [quickTasks, loadQuickTasks] = useLoadQuickTasks();
	const [formValue, setFormValue] = useState<string>("");

	useEffect(() => {
		loadQuickTasks();
	}, []);

	return (
		<>
			<div className="flex items-center gap-2 mt-2">
				<PanelTitle />
				<AddQuickTaskForm formValue={formValue} setFormValue={setFormValue} />
			</div>
			{quickTasks.length ? (
				<QuickTaskList quickTasks={quickTasks} />
			) : (
				<Empty formValue={formValue} />
			)}
		</>
	);
};
