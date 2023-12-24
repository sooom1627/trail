import { Task } from "@/lib/task/interface/Task";
import { TaskRow } from "./TaskRow";

interface TaskTableProps {
	tasks: Task[];
}

export const TaskTable: React.FC<TaskTableProps> = (tasks) => {
	return (
		<div className="rounded-lg grow h-full flex flex-col overflow-auto pr-1">
			<table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
				<thead className="text-xs text-zinc-700 uppercase bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-400 sticky top-0">
					<tr>
						<th scope="col" className="px-4 py-3">
							Title
						</th>
						<th scope="col" className="px-4 py-3 text-center">
							Tag
						</th>
						<th scope="col" className="px-4 py-3 text-center">
							Duration
						</th>
					</tr>
				</thead>
				<tbody>
					{tasks.tasks.map((task) => (
						<TaskRow task={task} key={task.id} />
					))}
				</tbody>
			</table>
		</div>
	);
};
