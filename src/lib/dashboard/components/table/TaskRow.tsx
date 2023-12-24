import { useTagInfo } from "@/lib/task/hooks/useTaginfo";
import { ExecutionTime } from "@/lib/task/interface/ExecutionTime";
import { Task } from "@/lib/task/interface/Task";
import { getDoneTaskExecutionTime } from "@/lib/task/utils/getExecutionTime";
import { useEffect, useState } from "react";

interface TaskRowProps {
	task: Task;
}

export const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
	const tag = useTagInfo(task?.tag || "");
	const [executionTime, setExecutionTime] = useState<ExecutionTime>({
		hoursStr: "00",
		minutesStr: "00",
		secondsStr: "00",
	});

	useEffect(() => {
		if (task.startTime && task.endTime) {
			const result = getDoneTaskExecutionTime(
				task.startTime,
				task.endTime,
				task.pauses
			);
			setExecutionTime(result);
		}
	}, []);
	return (
		<tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700 w-full">
			<th
				scope="row"
				className="px-2 py-2 font-medium text-ms text-zinc-900 whitespace-nowrap max-w-[250px]"
			>
				{task.title}
			</th>
			<td className="px-2 py-2 text-center">
				{tag ? (
					<span
						className={`${`bg-${tag.color}-200`} text-${
							tag.color
						}-800 text-xs font-medium px-2.5 py-0.5 rounded duration-200`}
					>
						{tag.title}
					</span>
				) : (
					"-"
				)}
			</td>
			<td className="px-2 py-2 w-28 text-center">{`${executionTime.hoursStr}h ${executionTime.minutesStr}m ${executionTime.secondsStr}s`}</td>
		</tr>
	);
};
