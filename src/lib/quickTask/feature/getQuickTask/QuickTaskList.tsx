import { QuickTaskCard } from "../handleQuickTask/QuickTaskCard";
import { quickTaskSplitter } from "../../util/quickTaskSplitter";
import { QuickTask } from "../../interface/QuickTask";

export const QuickTaskList = ({ quickTasks }: { quickTasks: QuickTask[] }) => {
	const { todoQuickTask, doneQuickTask } = quickTaskSplitter(quickTasks);

	return (
		<div className="h-full overflow-y-auto mt-2 pb-10">
			{todoQuickTask.map((task, i) => (
				<QuickTaskCard key={i} task={task} />
			))}
			{doneQuickTask.map((task, i) => (
				<QuickTaskCard key={i} task={task} />
			))}
		</div>
	);
};
