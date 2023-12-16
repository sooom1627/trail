import React, { useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTasksState } from "../../stores/task/taskAtom";
import { ModalContext } from "../../stores/modal/ModalContext";
import { Task } from "../../interface/Task";
import { ExecutionTime } from "../../interface/ExecutionTime";
import { getDoneTaskExecutionTime } from "../../utils/getExecutionTime";
import { getPriorityIcon } from "../../utils/getPriorityIcon";
import { TaskTitle } from "./TaskTitle";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { EditIcon } from "@/components/icons/action/EditIcon";
import { useTagInfo } from "../../hooks/useTaginfo";

interface TaskCardProps {
	task: Task;
	key: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
	const [, setSelectedTask] = useRecoilState(selectedTasksState);
	const { setToggleModal } = useContext(ModalContext);
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
		<>
			<div className="p-4 flex justify-between items-center  max-w-full">
				<TaskTitle setSelectedTask={setSelectedTask} task={task} />
				{tag ? (
					<span
						className={`${`bg-${tag.color}-200`} text-${
							tag.color
						}-800 text-xs font-medium px-2.5 py-0.5 rounded duration-200`}
					>
						{tag.title}
					</span>
				) : null}
				<div className="flex items-center min-w-fit ml-4">
					<ClockIcon />
					<p className="text-sm flex gap-1 mr-4 ml-2 items-center justify-between">
						{`${executionTime.hoursStr}h ${executionTime.minutesStr}m ${executionTime.secondsStr}s`}
					</p>
					{getPriorityIcon(task.priority)}
					<div
						className="bg-zinc-100 p-1.5 rounded-full ml-4 hover:bg-zinc-200 cursor-pointer"
						onClick={() => {
							setSelectedTask(task);
							setToggleModal(true);
						}}
					>
						<EditIcon />
					</div>
				</div>
			</div>
		</>
	);
};
