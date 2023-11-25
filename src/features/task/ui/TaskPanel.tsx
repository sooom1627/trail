import { useRecoilState } from "recoil";
import { selectedTasksState } from "../srtores/atom/taskAtom";
import { useHandleTaskExecution } from "../hooks/useHandleTaskExecution";
import { PlayIcon } from "../../..//components/icons/action/PlayIcon";

export const TaskPanel = () => {
	const [selectedTask] = useRecoilState(selectedTasksState);
	const startTask = useHandleTaskExecution("doing");
	const endTask = useHandleTaskExecution("done");

	return (
		<div className="flex w-full gap-4">
			<div className="h-56 min-w-5/12 max-w-5/12 w-full bg-zinc-100 rounded-lg px-4 py-8">
				{selectedTask ? (
					<>
						<div className="border-b pb-4">
							<div className="flex items-center justify-between gap-2">
								<p className="text-sm font-bold truncate mb-1">
									{selectedTask?.title}
								</p>
								<div className="w-fit">
									<svg
										className="w-4 h-4 text-gray-800 dark:text-white"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 16 3"
									>
										<path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
									</svg>
								</div>
							</div>
							<p>
								<span className="bg-zinc-200 text-zinc-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-zinc-900 dark:text-zinc-300">
									+ add tags
								</span>
							</p>
						</div>
						<div></div>
						<p className="text-2xl items-center m-4 text-center">
							<span className="text-5xl m-1">00</span>h
							<span className="text-5xl m-1">00</span>m
							<span className="text-5xl m-1">00</span>s
						</p>
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
										<svg
											className="w-2 h-2 text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 10 16"
										>
											<path
												fill-rule="evenodd"
												d="M0 .8C0 .358.32 0 .714 0h1.429c.394 0 .714.358.714.8v14.4c0 .442-.32.8-.714.8H.714a.678.678 0 0 1-.505-.234A.851.851 0 0 1 0 15.2V.8Zm7.143 0c0-.442.32-.8.714-.8h1.429c.19 0 .37.084.505.234.134.15.209.354.209.566v14.4c0 .442-.32.8-.714.8H7.857c-.394 0-.714-.358-.714-.8V.8Z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
									<button
										onClick={() => endTask(selectedTask.id)}
										className="h-fit text-white bg-zinc-700 hover:bg-zinc-800 rounded-full text-sm p-2.5 text-center inline-flex items-center"
									>
										<svg
											className="w-2 h-2 text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
									</button>
								</>
							) : (
								""
							)}
						</div>
					</>
				) : (
					""
				)}
			</div>
			<div className="bg-zinc-100 p-8 rounded-lg mb-4 h-56 w-7/12">
				<p>hello</p>
			</div>
		</div>
	);
};
