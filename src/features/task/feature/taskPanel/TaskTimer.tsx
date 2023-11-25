import { useHandleTaskExecution } from "../../hooks/useHandleTaskExecution";
import { Task } from "../../interface/Task";
import { PlayIcon } from "../../../../components/icons/action/PlayIcon";
import { PauseIcon } from "../../../../components/icons/action/PauseIcon";
import { CheckIcon } from "../../../../components/icons/action/CheckIcon";
import { useEffect, useState } from "react";
import { ExecutionTime } from "../../interface/ExecutionTime";
import { getDoneTaskExecutionTime } from "../../utils/getExecutionTime";

interface TaskTimerProps {
	task: Task;
}

export const TaskTimer: React.FC<TaskTimerProps> = ({ task }) => {
	const [executionTime, setExecutionTime] = useState<ExecutionTime>({
		hoursStr: "00",
		minutesStr: "00",
		secondsStr: "00",
	});

	useEffect(() => {
		if (task.startTime && task.endTime) {
			const result = getDoneTaskExecutionTime(task.startTime, task.endTime);
			setExecutionTime(result);
		} else if (!task.startTime && !task.endTime) {
			setExecutionTime({
				hoursStr: "00",
				minutesStr: "00",
				secondsStr: "00",
			});
		}
	}, [task]);

	const startTask = useHandleTaskExecution("doing");
	const endTask = useHandleTaskExecution("done");
	return (
		<>
			<p className="text-2xl items-center m-4 text-center">
				<span className="text-5xl m-1">{executionTime.hoursStr}</span>h
				<span className="text-5xl m-1">{executionTime.minutesStr}</span>m
				<span className="text-5xl m-1">{executionTime.secondsStr}</span>s
			</p>
			<div className="gap-2 flex items-center justify-center min-w-fit">
				{task?.status === "todo" ? (
					<>
						<button
							type="button"
							className="h-fit text-white bg-zinc-700 hover:bg-zinc-800 rounded-full text-sm p-2.5 text-center inline-flex items-center"
							onClick={() => startTask(task.id)}
						>
							<PlayIcon />
						</button>
					</>
				) : task?.status === "doing" ? (
					<>
						<button className="h-fit text-white bg-red-500 hover:bg-red-600 rounded-full text-sm p-2.5 text-center inline-flex items-center">
							<PauseIcon />
						</button>
						<button
							onClick={() => endTask(task.id)}
							className="h-fit text-white bg-zinc-700 hover:bg-zinc-800 rounded-full text-sm p-2.5 text-center inline-flex items-center"
						>
							<CheckIcon />
						</button>
					</>
				) : task?.status === "done" ? (
					<div className="block text-center">
						<p>2023/11/23 11:11 ~ 13:22</p>
						<p className="text-xs text-zinc-500">(Pause in 23min)</p>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};
