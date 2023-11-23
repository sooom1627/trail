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
					<div className="bg-zinc-100 px-8 py-6 flex flex-col justify-center rounded-lg mb-4 min-h-28 max-h-28">
						<p className="text-zinc-400">Hello, {getCurrentDate(today)} </p>
						<p className="text-2xl font-bold">{`You've got ${doneTasks.length} tasks & spent 01:22 on tasks today.`}</p>
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
					<div className="bg-zinc-100 p-8 rounded-lg mb-4 h-64">
						{selectedTask?.status === "todo" ? (
							<>
								<p className="text-xl font-bold">{selectedTask?.title}</p>
								<button onClick={() => startTask(selectedTask?.id)}>hs</button>
							</>
						) : selectedTask?.status === "doing" ? (
							<>
								<p className="text-xl font-bold">{selectedTask?.title}</p>
								<button onClick={() => endTask(selectedTask?.id)}>hs</button>
							</>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
};
