import React, { useEffect, useState } from "react";
import { tasksState } from "./srtores/atom/taskAtom";
import { useRecoilState } from "recoil";
import { useLoadTasks } from "./hooks/useLoadTasks";
import { useTaskSplitter } from "./hooks/useTaskSplitter";
import { getCurrentDate } from "@/utils/getCurrentTime";
import { AddTaskForm } from "./feature/addTask/AddTaskForm";
import { TaskList } from "./feature/taskList/TaskList";
import { Tab } from "@/components/tab/tab";
import { TabContent } from "@/components/tab/TabContent";
import { TaskPanel } from "./feature/taskPanel/TaskPanel";

export const TaskPage: React.FC = () => {
	const [tasks] = useRecoilState(tasksState);

	const tabNames = ["todo", "doing", "done"];
	const [activeTab, setActiveTab] = useState(tabNames[0]);

	const loadTasks = useLoadTasks();
	const today = new Date();

	useEffect(() => {
		loadTasks();
	}, []);
	const { todoTasks, doingTasks, doneTasks } = useTaskSplitter(tasks);

	return (
		<>
			<div className="flex py-10 h-screen">
				<div className="max-w-2/3 min-w-2/3 flex flex-col mr-4">
					<div className="flex flex-col justify-center mb-4 min-h-28 max-h-28">
						<p className="text-zinc-400">Hello, {getCurrentDate(today)} </p>
						<p className="text-2xl font-bold">{`You've got ${doneTasks.length} tasks & spent 01:22 on tasks today.`}</p>
					</div>
					<TaskPanel />
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
				<div className="grow ml-4">
					<p>hello</p>
				</div>
			</div>
		</>
	);
};
