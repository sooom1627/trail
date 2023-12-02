import { QuickTaskCard } from "../handleQuickTask/QuickTaskCard";
import { useLoadQuickTasks } from "../../hooks/useLoadQuickTasks";
import { useEffect } from "react";
import { quickTaskSplitter } from "../../util/quickTaskSplitter";

export const QuickTaskList = () => {
	const [quickTasks, loadQuickTasks] = useLoadQuickTasks();
	const { todoQuickTask, doneQuickTask } = quickTaskSplitter(quickTasks);

	useEffect(() => {
		loadQuickTasks();
	}, []);

	return (
		<div className="h-full overflow-y-auto mt-2">
			{todoQuickTask.map((task, i) => (
				<QuickTaskCard key={i} task={task} />
			))}
			{doneQuickTask.map((task, i) => (
				<QuickTaskCard key={i} task={task} />
			))}
		</div>
	);
};
