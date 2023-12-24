import { useLoadTasks } from "@/lib/task/hooks/useLoadTasks";
import { WeeklyLineChart } from "../components/charts/WeeklyLineChart";
import { WeeklyPieChart } from "../components/charts/WeeklyPieChart";
import { useEffect } from "react";
import { useLoadTags } from "@/lib/tag/hooks/useLoadTags";
import { TaskTable } from "../components/table/TaskTable";

export const Dashboard = () => {
	const [tasks, loadTasks] = useLoadTasks();
	const { tags, loadTags } = useLoadTags();
	useEffect(() => {
		loadTasks();
		loadTags();
	}, []);

	return (
		<>
			<div className="flex items-center gap-4">
				<div className="w-2/3">
					<WeeklyLineChart tasks={tasks} />
				</div>
				<div className="w-1/3">
					<WeeklyPieChart tasks={tasks} tags={tags} />
				</div>
			</div>
			<TaskTable />
		</>
	);
};
