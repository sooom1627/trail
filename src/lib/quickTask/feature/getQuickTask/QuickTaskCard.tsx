import { useHandleQuickTaskExecution } from "../../hooks/useHandleQuickTaskExecution";
import { QuickTask } from "../../interface/QuickTask";

interface QuickTaskCardProps {
	task: QuickTask;
}

export const QuickTaskCard: React.FC<QuickTaskCardProps> = ({ task }) => {
	const handleQuickTaskExecution = useHandleQuickTaskExecution(task);
	return (
		<div className="flex items-start p-2 w-full">
			<input
				className="accent-white  border-zinc-300 focus:ring-3 focus:ring-zinc-300 h-4 w-4 rounded cursor-pointer transition-transform duration-500 ease-in-out"
				type="checkbox"
				checked={task.status === "done"}
				onChange={() => handleQuickTaskExecution()}
				id={task.id}
			/>
			<label
				className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow ${
					task.status === "done" ? "line-through decoration-zinc-700" : ""
				}`}
				onClick={() => handleQuickTaskExecution()}
				htmlFor={task.id}
			>
				{task.title}
			</label>
			<p className="text-xs font-medium text-zinc-400">
				{task.created.getHours()}:{task.created.getMinutes()}
			</p>
		</div>
	);
};
