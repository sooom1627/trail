import React, { useEffect, useState } from "react";
import { tasksState, selectedTasksState } from "./srtores/atom/taskAtom";
import { useRecoilState } from "recoil";
import { useLoadTasks } from "./hooks/useLoadTasks";
import { useTaskSplitter } from "./hooks/useTaskSplitter";
import { useHandleTaskExecution } from "./hooks/useHandleTaskExecution";
import { getCurrentDate } from "../../utils/getCurrentTime";
import { AddTaskForm } from "./feature/addTask/AddTaskForm";
import { TaskList } from "./ui/TaskList";
import { Tab } from "../../components/tab/tab";
import { TabContent } from "../../components/tab/TabContent";
import { PlayIcon } from "../..//components/icons/action/PlayIcon";

export const TaskPage: React.FC = () => {
	const [tasks] = useRecoilState(tasksState);
	const [selectedTask] = useRecoilState(selectedTasksState);
	const tabNames = ["todo", "doing", "done"];
	const [activeTab, setActiveTab] = useState(tabNames[0]);
	const startTask = useHandleTaskExecution("doing");
	const endTask = useHandleTaskExecution("done");
	const loadTasks = useLoadTasks();
	const today = new Date();

	useEffect(() => {
		loadTasks();
	}, []);
	const { todoTasks, doingTasks, doneTasks } = useTaskSplitter(tasks);

	return (
		<>
			<div className="flex py-10 h-screen">
				<div className=" w-2/3 flex flex-col mr-4">
					<div className="flex flex-col justify-center mb-4 min-h-28 max-h-28">
						<p className="text-zinc-400">Hello, {getCurrentDate(today)} </p>
						<p className="text-2xl font-bold">{`You've got ${doneTasks.length} tasks & spent 01:22 on tasks today.`}</p>
					</div>
					<div className="flex w-full gap-4">
						<div className="bg-zinc-100 p-8 rounded-lg mb-4 h-56 w-7/12">
							<p>hello</p>
						</div>
						<div className="h-48 min-w-5/12 max-w-5/12">
							<div className="bg-zinc-100 px-4 py-8 rounded-lg h-48 w-full ">
								{selectedTask ? (
									<>
										<div className="flex border-b pb-2 items-center justify-between gap-2">
											<div className="truncate">
												<p className="text-sm font-bold truncate">
													{selectedTask?.title}
												</p>
												<p>
													<span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
														GI
													</span>
												</p>
											</div>
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
										<div className="mt-6 flex gap-2">
											<p className="text-2xl w-full items-center">
												<span className="text-4xl m-1">11</span>h
												<span className="text-4xl m-1">23</span>m
												<span className="text-4xl m-1">32</span>s
											</p>
											<div className="gap-2 flex justify-center items-center min-w-fit">
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
														<button className="h-fit text-white bg-zinc-700 hover:bg-zinc-800 rounded-full text-sm p-2.5 text-center inline-flex items-center">
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
										</div>
									</>
								) : (
									""
								)}
							</div>
							<div className="flex gap-1 justify-center mt-2">
								<button
									type="button"
									className="w-3 h-3 rounded-full"
									aria-current="true"
									aria-label="Slide 1"
									data-carousel-slide-to="0"
								>
									⚫︎
								</button>
								<button
									type="button"
									className="w-3 h-3 rounded-full text-zinc-300"
									aria-current="true"
									aria-label="Slide 1"
									data-carousel-slide-to="0"
								>
									⚫︎
								</button>
								<button
									type="button"
									className="w-3 h-3 rounded-full text-zinc-300"
									aria-current="true"
									aria-label="Slide 1"
									data-carousel-slide-to="0"
								>
									⚫︎
								</button>
							</div>
						</div>
					</div>
					<AddTaskForm />
					<Tab
						tabNames={tabNames}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					>
						<TabContent activeTab={activeTab} tabName="todo">
							<TaskList tasks={todoTasks} />
						</TabContent>
						<TabContent activeTab={activeTab} tabName="doing">
							<TaskList tasks={doingTasks} />
						</TabContent>
						<TabContent activeTab={activeTab} tabName="done">
							<TaskList tasks={doneTasks} />
						</TabContent>
					</Tab>
				</div>
				<div className="w-1/3 ml-4">
					<p>hello</p>
				</div>
			</div>
		</>
	);
};
