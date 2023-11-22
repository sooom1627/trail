import { Task } from "../interface/Task";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
	tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
	return (
		<div className="divide-y divide-dotted divide-zinc-200">
			{tasks.map((task: Task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
};
