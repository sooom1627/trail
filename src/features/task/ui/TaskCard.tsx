import React from "react";
import { useRecoilState } from "recoil";
import { selectedTasksState } from "../srtores/atom/taskAtom";
import { Task } from "../interface/Task";
import { getPriorityIcon } from "../utils/getPriorityIcon";
import { ClockIcon } from "../../../components/icons/ClockIcon";
import { EditIcon } from "../../../components/icons/action/EditIcon";

interface TaskCardProps {
	task: Task;
	key: string;
}

export const TaskCard: React.FC<TaskCardProps> = (task) => {
	const [, setSelectedTask] = useRecoilState(selectedTasksState);
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
				<p className="text-sm ml-2 mr-4">00h 00m 00s </p>
				{getPriorityIcon(task.task.priority)}
				<div className="bg-zinc-100 p-1.5 rounded-full ml-6 cursol-pointer">
					<EditIcon />
				</div>
			</div>
		</div>
	);
};
