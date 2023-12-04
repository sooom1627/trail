import { getCurrentDate } from "@/utils/getCurrentTime";
import { Task } from "../../interface/Task";
import { getTodayDoneTaskExecutionTime } from "../../utils/getExecutionTime";

interface TaskPageHeadingProps {
	doneTasks: Task[];
}

export const TaskPageHeading: React.FC<TaskPageHeadingProps> = ({
	doneTasks,
}) => {
	const today = new Date();
	const executionTime = getTodayDoneTaskExecutionTime(doneTasks);
	return (
		<div className="flex flex-col justify-center mb-4 min-h-28 max-h-28">
			<p className="text-zinc-400">Hello, {getCurrentDate(today)} </p>
			<p className="text-2xl font-bold">
				You've got
				<span> {doneTasks.length} </span>
				tasks done & spent
				<span> {executionTime.hoursStr}</span>
				<span className="text-base">h</span>
				<span>{executionTime.minutesStr}</span>
				<span className="text-base">m </span>
				on tasks today.
			</p>
		</div>
	);
};
