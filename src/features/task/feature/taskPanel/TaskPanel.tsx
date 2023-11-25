import { useRecoilState } from "recoil";
import { selectedTasksState } from "../../srtores/atom/taskAtom";
import { TaskTimer } from "./TaskTimer";
import { EditIcon } from "@/components/icons/action/EditIcon";
import { TimerEmpty } from "../ui/TimerEmpty/TimerEmpty";

export const TaskPanel = () => {
	const [selectedTask] = useRecoilState(selectedTasksState);

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
								<div className="w-fit cursor-pointer">
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
					</>
				) : (
					<>
						<TimerEmpty />
					</>
				)}
			</div>
			<div className="bg-zinc-100 p-8 rounded-lg mb-4 h-56 w-7/12">
				<p>hello</p>
			</div>
		</div>
	);
};
