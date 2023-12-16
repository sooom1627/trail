import { QuickTask } from "../../interface/QuickTask";
import styles from "./QuickTaskCard.module.css";

interface QuickTaskCardProps {
	task: QuickTask;
	handleQuickTaskExecution: (task: QuickTask) => void;
}

export const QuickTaskCard: React.FC<QuickTaskCardProps> = ({
	task,
	handleQuickTaskExecution,
}) => {
	return (
		<div className="flex items-center p-2 w-ful ">
			<input
				className={styles.cyberpunkCheckbox}
				type="checkbox"
				checked={task.status === "done"}
				onChange={() => handleQuickTaskExecution(task)}
				id={task.id}
			/>
			<label
				className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow ${
					task.status === "done"
						? "line-through decoration-zinc-500 text-zinc-400"
						: ""
				}`}
				onClick={() => handleQuickTaskExecution(task)}
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
