import { useHandleTaskExecution } from "../../../hooks/useHandleTaskExecution";
import { PlayIcon } from "@/components/icons/action/PlayIcon";
import { PauseIcon } from "@/components/icons/action/PauseIcon";
import { CheckIcon } from "@/components/icons/action/CheckIcon";
import { useContext, useEffect, useState } from "react";
import { ExecutionTime } from "../../../interface/ExecutionTime";
import { getTimerTaskExecutionTime } from "../../../utils/getExecutionTime";
import { Timer } from "../../../ui/taskExecution/Timer";
import { EditIcon } from "@/components/icons/action/EditIcon";
import { Task } from "@/lib/task/interface/Task";
import { ModalContext } from "@/lib/task/srtores/context/ModalContext";

interface taskExecutionProps {
	selectedTask: Task;
}

export const TaskExecution: React.FC<taskExecutionProps> = ({
	selectedTask,
}) => {
	const { setToggleModal } = useContext(ModalContext);
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
			<div className="border-b pb-4">
				<div className="flex items-center justify-between gap-2">
					<p className="text-sm font-bold truncate mb-1">
						{selectedTask?.title}
					</p>
					<div
						className="w-fit cursor-pointer"
						onClick={() => setToggleModal(true)}
					>
						<EditIcon />
					</div>
				</div>
				<p
					className="cursor-pointer"
					onClick={() => alert("Ready in Tags!! Just wait!")}
				>
					<span className="bg-zinc-200 text-zinc-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-300">
						+ add tags
					</span>
				</p>
			</div>
			<Timer executionTime={executionTime} />
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
