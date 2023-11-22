import React, { useEffect, useState } from "react";
import { tasksState, selectedTasksState } from "./srtores/atom/taskAtom";
import { useRecoilState } from "recoil";
import { useLoadTasks } from "./hooks/useLoadTasks";
import { useTaskSplitter } from "./hooks/useTaskSplitter";
import { useStartTask } from "./hooks/useStartTask";
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
	const startTask = useStartTask();
	const loadTasks = useLoadTasks();
	const today = new Date();

	useEffect(() => {
		loadTasks();
	}, []);
	const { todoTasks, doingTasks, doneTasks } = useTaskSplitter(tasks);

	return (
		<div className="flex h-screen py-12">
			<div className=" w-1/2 flex flex-col mr-4">
				<div className="bg-zinc-100 p-8 rounded-lg mb-4">
					<p className="text-zinc-400">Hello, {getCurrentDate(today)} </p>
					<p className="text-2xl font-bold">{`You've got ${tasks.length} tasks today.`}</p>
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
			<div className="w-1/2 ml-4 h-screen">
				{selectedTask ? (
					<div>
						<p>{selectedTask?.title}</p>
						<button onClick={() => startTask(selectedTask.id)}>hs</button>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};
