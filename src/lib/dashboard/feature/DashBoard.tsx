import { useLoadTasks } from "@/lib/task/hooks/useLoadTasks";
import { WeeklyLineChart } from "../components/charts/WeeklyLineChart";
import { WeeklyPieChart } from "../components/charts/WeeklyPieChart";
import { useEffect } from "react";
import { useLoadTags } from "@/lib/tag/hooks/useLoadTags";
import { TaskTable } from "../components/table/TaskTable";
import { filterTasksCompletedInLast7Days } from "../utils/filterTasksCompletedInLast7Days";
import { calculateTotalElapsedTime } from "../utils/calculateTotalElapsedTime";

export const Dashboard = () => {
	const [tasks, loadTasks] = useLoadTasks();
	const { tags, loadTags } = useLoadTags();
	const executionTime = calculateTotalElapsedTime(
		filterTasksCompletedInLast7Days(tasks)
	);

	useEffect(() => {
		loadTasks();
		loadTags();
	}, []);

	return (
		<>
			<div className="h-full overflow-hidden gap-4 w-7/12 py-2 flex flex-col">
				<div className="w-full">
					<div className="flex gap-2">
						<div className="w-1/2 bg-zinc-100 p-2 rounded-lg text-center">
							<p className="text-xs">Duration in 7 days.</p>
							<p className="text-3xl">
								<span> {Math.floor(executionTime / 60)}</span>
								<span className="text-base">h</span>
								<span>{Math.floor(executionTime % 60)}</span>
								<span className="text-base">m </span>
							</p>
						</div>
						<div className="w-1/2 bg-zinc-100 p-2 rounded-lg text-center">
							<p className="text-xs">Count in 7 days.</p>
							<p className="text-3xl">
								{filterTasksCompletedInLast7Days(tasks).length}
							</p>
						</div>
					</div>
					<p></p>
				</div>
				<TaskTable tasks={filterTasksCompletedInLast7Days(tasks)} />
			</div>
			<div className="items-center gap-4 w-5/12">
				<div className="h-[60%] py-2">
					<WeeklyLineChart
						tasks={filterTasksCompletedInLast7Days(tasks)}
						tags={tags}
					/>
				</div>
				<div className="h-[40%] py-2">
					<WeeklyPieChart
						tasks={filterTasksCompletedInLast7Days(tasks)}
						tags={tags}
					/>
				</div>
			</div>
		</>
	);
};
