import { useRecoilState } from "recoil";
import { selectedTasksState } from "../../srtores/atom/taskAtom";
import { TaskTimer } from "./TaskTimer/TaskTimer";
import { EditIcon } from "@/components/icons/action/EditIcon";
import { TimerEmpty } from "../ui/TimerEmpty/TimerEmpty";
import { TaskTrackChart } from "./TaskTrackChart/TaskTrackChart";
import { TaskEditModal } from "../editTask/TaskEditModal";
import { useState } from "react";
import { Task } from "../../interface/Task";

interface TaskPanelProps {
	doneTasks: Task[];
}

export const TaskPanel: React.FC<TaskPanelProps> = ({ doneTasks }) => {
	const [selectedTask] = useRecoilState(selectedTasksState);
	const [toggleModal, setToggleModal] = useState<boolean>(false);

	return (
		<div className="flex w-full gap-4">
			<div className="h-56 min-w-5/12 max-w-5/12 w-full bg-zinc-100 rounded-lg px-4 py-6">
				{selectedTask ? (
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
						<TaskTimer />
						<TaskEditModal
							task={selectedTask}
							toggleModal={toggleModal}
							setToggleModal={setToggleModal}
						/>
					</>
				) : (
					<>
						<TimerEmpty />
					</>
				)}
			</div>
			<div className="bg-zinc-100 p-6 rounded-lg mb-4 h-56 w-7/12">
				<p className="pb-4 font-bold">Today's Flow</p>
				<TaskTrackChart doneTasks={doneTasks} />
			</div>
		</div>
	);
};
