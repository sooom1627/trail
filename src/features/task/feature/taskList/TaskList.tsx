import { Task } from "../../interface/Task";
import { TaskEmpty } from "../ui/TaskEmpty";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
	tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
	return (
		<div className="divide-y divide-dotted divide-zinc-200 overflow-y-auto pr-2">
			{tasks[0] ? (
				tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
			) : (
				<TaskEmpty />
			)}
		</div>
	);
};
