import { TaskRow } from "./TaskRow";

export const TaskTable = () => {
	return (
		<div className="overflow-y-auto mt-4 rounded-lg">
			<table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
				<thead className="text-xs text-zinc-700 uppercase bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-400 sticky top-0">
					<tr>
						<th scope="col" className="px-4 py-3">
							Title
						</th>
						<th scope="col" className="px-4 py-3">
							Tag
						</th>
						<th scope="col" className="px-4 py-3">
							Duration
						</th>
						<th scope="col" className="px-4 py-3">
							Priority
						</th>
					</tr>
				</thead>
				<tbody>
					<TaskRow />
					<TaskRow />
					<TaskRow />
					<TaskRow />
					<TaskRow />
					<TaskRow />
					<TaskRow />
					<TaskRow />

					<TaskRow />
					<TaskRow />
					<TaskRow />
					<TaskRow />
				</tbody>
			</table>
		</div>
	);
};
