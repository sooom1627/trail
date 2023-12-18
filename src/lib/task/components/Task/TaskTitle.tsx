import { Task } from "@/lib/task/interface/Task";

interface TaskTitleProps {
	setSelectedTask: (task: Task) => void;
	task: Task;
}

export const TaskTitle: React.FC<TaskTitleProps> = ({
	setSelectedTask,
	task,
}) => {
	return (
		<div
			className="truncate cursor-pointer grow"
			onClick={() => setSelectedTask(task)}
		>
			<p className="font-bold text-sm truncate">{task.title}</p>
			<p className="text-sm text-zinc-400">
				{task.status === "todo"
					? `Create: ${task.created.toLocaleString()}`
					: task.status === "doing" && task.startTime
					? `Start: ${task.startTime.toLocaleString()}`
					: task.status === "pause" && task.startTime
					? `Start: ${task.startTime.toLocaleString()}`
					: task.status === "done" && task.endTime
					? `End: ${task.endTime.toLocaleString()}`
					: null}
			</p>
		</div>
	);
};
