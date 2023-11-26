import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTasksState } from "../../srtores/atom/taskAtom";
import { Task } from "../../interface/Task";
import { getPriorityIcon } from "../../utils/getPriorityIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { EditIcon } from "@/components/icons/action/EditIcon";
import { getDoneTaskExecutionTime } from "../../utils/getExecutionTime";
import { ExecutionTime } from "../../interface/ExecutionTime";
import { TaskEditModal } from "../editTask/TaskEditModal";

interface TaskCardProps {
	task: Task;
	key: string;
}

export const TaskCard: React.FC<TaskCardProps> = (task) => {
	const [, setSelectedTask] = useRecoilState(selectedTasksState);
	const [toggleModal, setToggleModal] = useState<boolean>(false);
	const [executionTime, setExecutionTime] = useState<ExecutionTime>({
		hoursStr: "00",
		minutesStr: "00",
		secondsStr: "00",
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
		<>
			<div className="p-4 flex justify-between items-center  max-w-full">
				<div
					className="truncate cursor-pointer grow"
					onClick={() => setSelectedTask(task.task)}
				>
					<p className="font-bold text-sm truncate">{task.task.title}</p>
					{task.task.status === "todo" ? (
						<p className="text-sm text-zinc-400">
							Create: {task.task.created.toLocaleString()}
						</p>
					) : task.task.status === "doing" && task.task.startTime ? (
						<p className="text-sm text-zinc-400">
							Start: {task.task.startTime.toLocaleString()}
						</p>
					) : task.task.status === "done" && task.task.endTime ? (
						<p className="text-sm text-zinc-400">
							End: {task.task.endTime.toLocaleString()}
						</p>
					) : null}
				</div>
				<div className="flex items-center min-w-fit ml-4">
					<ClockIcon />
					<p className="text-sm flex gap-1 mr-4 ml-2 items-center justify-between">
						{`${executionTime.hoursStr}h ${executionTime.minutesStr}m ${executionTime.secondsStr}s`}
					</p>
					{getPriorityIcon(task.task.priority)}
					<div
						className="bg-zinc-100 p-1.5 rounded-full ml-4 hover:bg-zinc-200 cursor-pointer"
						onClick={() => setToggleModal(true)}
					>
						<EditIcon />
					</div>
				</div>
			</div>
			<TaskEditModal
				task={task.task}
				toggleModal={toggleModal}
				setToggleModal={setToggleModal}
			/>
		</>
	);
};
