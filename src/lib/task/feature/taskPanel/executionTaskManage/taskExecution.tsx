import { useHandleTaskExecution } from "../../../hooks/useHandleTaskExecution";
import { PlayIcon } from "@/components/icons/action/PlayIcon";
import { PauseIcon } from "@/components/icons/action/PauseIcon";
import { CheckIcon } from "@/components/icons/action/CheckIcon";
import { useEffect, useState } from "react";
import { ExecutionTime } from "../../../interface/ExecutionTime";
import { getTimerTaskExecutionTime } from "../../../utils/getExecutionTime";
import { useRecoilState } from "recoil";
import { selectedTasksState } from "../../../srtores/atom/taskAtom";
import { Timer } from "../../ui/Timer/Timer";

export const TaskExecution: React.FC = () => {
	const [selectedTask] = useRecoilState(selectedTasksState);
	const [executionTime, setExecutionTime] = useState<ExecutionTime>({
		hoursStr: "00",
		minutesStr: "00",
		secondsStr: "00",
	});
	const startTask = useHandleTaskExecution("doing");
	const endTask = useHandleTaskExecution("done");

	useEffect(() => {
		if (selectedTask) {
			const timerId = getTimerTaskExecutionTime(selectedTask, setExecutionTime);

			return () => {
				if (timerId) {
					clearInterval(timerId);
				}
			};
		}
	}, [selectedTask, setExecutionTime]);

	return (
		<>
			<Timer
				hoursStr={executionTime.hoursStr}
				minutesStr={executionTime.minutesStr}
				secondsStr={executionTime.secondsStr}
			/>
			<div className="gap-2 flex items-center justify-center min-w-fit">
				{selectedTask?.status === "todo" ? (
					<>
						<button
							type="button"
							className="h-fit text-white bg-zinc-700 hover:bg-zinc-800 rounded-full text-sm p-2.5 text-center inline-flex items-center"
							onClick={() => startTask(selectedTask.id)}
						>
							<PlayIcon />
						</button>
					</>
				) : selectedTask?.status === "doing" ? (
					<>
						<button className="h-fit text-white bg-red-500 hover:bg-red-600 rounded-full text-sm p-2.5 text-center inline-flex items-center">
							<PauseIcon />
						</button>
						<button
							onClick={() => {
								endTask(selectedTask.id);
							}}
							className="h-fit text-white bg-zinc-700 hover:bg-zinc-800 rounded-full text-sm p-2.5 text-center inline-flex items-center"
						>
							<CheckIcon />
						</button>
					</>
				) : selectedTask?.status === "done" ? (
					<div className="block text-center" style={{ marginTop: "-4px" }}>
						<p className="">2023/11/23 11:11 ~ 13:22</p>
						<p className="text-xs text-zinc-500">(Pause in 23min)</p>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};
