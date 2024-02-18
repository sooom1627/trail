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
			<div className="flex">
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
				{task.deadLine && (
					<>
						<p className="text-zinc-400 mx-1">/</p>
						<p
							className={`text-sm ${
								task.deadLine &&
								new Date(task.deadLine).getTime() - new Date().getTime() <=
									3 * 24 * 60 * 60 * 1000
									? "text-red-300"
									: "text-zinc-400"
							}`}
						>
							Deadline:{new Date(task.deadLine).toLocaleDateString()}
						</p>
					</>
				)}
			</div>
		</div>
	);
};
