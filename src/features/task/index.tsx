import React, { useEffect, useState } from "react";
import { tasksState } from "./srtores/atom/task";
import { AddTaskForm } from "./feature/addTask/AddTaskForm";
import { TaskList } from "./ui/TaskList";
import { getCurrentDate } from "../../utils/getCurrentTime";
import { useRecoilState } from "recoil";
import { useLoadTasks } from "./hooks/useLoadTasks";
import { Tab } from "../../components/tab/tab";
import { TabContent } from "../../components/tab/TabContents";

export const TaskPage: React.FC = () => {
	const today = new Date();
	const [tasks] = useRecoilState(tasksState);
	const loadTasks = useLoadTasks();
	const tabNames = ["todo", "doing", "done"];
	const [activeTab, setActiveTab] = useState(tabNames[0]);

	useEffect(() => {
		loadTasks();
	}, []);

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
						<p className="text-sm text-zinc-500 dark:text-zinc-400">
							This is some placeholder content the{" "}
							<strong className="font-medium text-zinc-800 dark:text-white">
								todo tab's associated content
							</strong>
							. Clicking another tab will toggle the visibility of this one for
							the next. The tab JavaScript swaps classes to control the content
							visibility and styling.
						</p>
					</TabContent>
					<TabContent activeTab={activeTab} tabName="doing">
						<p className="text-sm text-zinc-500 dark:text-zinc-400">
							This is some placeholder content the{" "}
							<strong className="font-medium text-zinc-800 dark:text-white">
								doing tab's associated content
							</strong>
							. Clicking another tab will toggle the visibility of this one for
							the next. The tab JavaScript swaps classes to control the content
							visibility and styling.
						</p>
					</TabContent>
					<TabContent activeTab={activeTab} tabName="done">
						<p className="text-sm text-zinc-500 dark:text-zinc-400">
							This is some placeholder content the{" "}
							<strong className="font-medium text-zinc-800 dark:text-white">
								done tab's associated content
							</strong>
							. Clicking another tab will toggle the visibility of this one for
							the next. The tab JavaScript swaps classes to control the content
							visibility and styling.
						</p>
					</TabContent>
				</Tab>
				<TaskList tasks={tasks} />
			</div>
			<div className="w-1/2 ml-4">
				<p>hello</p>
			</div>
		</div>
	);
};
