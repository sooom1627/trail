import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTasksState } from "../../srtores/atom/taskAtom";
import { Task } from "../../interface/Task";
import { getPriorityIcon } from "../../utils/getPriorityIcon";
import { ClockIcon } from "../../../../components/icons/ClockIcon";
import { EditIcon } from "../../../../components/icons/action/EditIcon";
import { getDoneTaskExecutionTime } from "../../utils/getExecutionTime";
import { ExecutionTime } from "../../interface/ExecutionTime";

interface TaskCardProps {
	task: Task;
	key: string;
}

export const TaskCard: React.FC<TaskCardProps> = (task) => {
	const [, setSelectedTask] = useRecoilState(selectedTasksState);
	const [executionTime, setExecutionTime] = useState<ExecutionTime>({
		hoursStr: "--",
		minutesStr: "--",
		secondsStr: "--",
	});

	useEffect(() => {
		if (task.task.startTime && task.task.endTime) {
			const result = getDoneTaskExecutionTime(
				task.task.startTime,
				task.task.endTime
			);
			setExecutionTime(result);
		}
	}, []);

	return (
		<div
			className="p-4 flex justify-between items-center cursor-pointer max-w-full"
			onClick={() => setSelectedTask(task.task)}
		>
			<div className="truncate">
				<p className="font-bold text-sm truncate">{task.task.title}</p>
				<p className="text-sm text-zinc-400">
					{task.task.created.toLocaleString()}
				</p>
			</div>
			<div className="flex items-center min-w-fit ml-4">
				<ClockIcon />
				<p className="text-sm flex gap-1 mr-4 ml-2 items-center justify-between">
					{`${executionTime.hoursStr}h ${executionTime.minutesStr}m ${executionTime.secondsStr}s`}
				</p>
				{getPriorityIcon(task.task.priority)}
				<div className="bg-zinc-100 p-1.5 rounded-full ml-4 cursol-pointer hover:bg-zinc-200">
					<EditIcon />
				</div>
			</div>
		</div>
	);
};
