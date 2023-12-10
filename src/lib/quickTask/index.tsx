import { QuickTaskList } from "./feature/getQuickTask/QuickTaskList";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { AddQuickTaskForm } from "./feature/addQuickTask/AddQuickTaskForm";
import { useEffect, useState } from "react";
import { useLoadQuickTasks } from "./hooks/useLoadQuickTasks";
import { Empty } from "./components/empty/Empty";

export const QuickTaskPanel = () => {
	const [quickTasks, loadQuickTasks] = useLoadQuickTasks();
	const [formValue, setFormValue] = useState<string>("");

	useEffect(() => {
		loadQuickTasks();
	}, []);

	return (
		<>
			<div className="flex items-center gap-2 mt-2">
				<div className="group relative">
					<div className="flex justify-start items-center min-w-fit">
						<p className="font-bold mr-1">Quick Task</p>
						<InfoIcon />
					</div>
					<div className="pointer-events-none absolute bottom-9 w-72 left-0 mt-8 p-2 bg-zinc-700 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
						<p className="text-sm font-medium py-1">
							Manage tasks take less than 5 minutes.
							<br />
							<span className="text-zinc-300">
								(Quick Tasks will be deleted the next day.)
							</span>
						</p>
					</div>
				</div>
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
