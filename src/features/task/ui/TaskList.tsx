import { Task } from "../interface/Task";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
	tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
	return (
		<>
			{tasks.map((task: Task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</>
	);
};
