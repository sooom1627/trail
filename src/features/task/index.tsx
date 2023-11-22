import React, { useEffect } from "react";
import { tasksState } from "./srtores/atom/task";
import { AddTaskForm } from "./feature/addTask/AddTaskForm";
import { TaskList } from "./ui/TaskList";
import { getCurrentDate } from "../../utils/getCurrentTime";
import { useRecoilState } from "recoil";
import { useLoadTasks } from "./hooks/useLoadTasks";
import { Tab } from "../../components/tab/tab";

export const TaskPage: React.FC = () => {
	const today = new Date();
	const [tasks] = useRecoilState(tasksState);
	const loadTasks = useLoadTasks();

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
				<Tab />
				<TaskList tasks={tasks} />
			</div>
			<div className="w-1/2 ml-4">
				<p>hello</p>
			</div>
		</div>
	);
};
