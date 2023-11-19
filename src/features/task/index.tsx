import React from "react";
import { getCurrentDate } from "../../utils/getCurrentTime";
import { Form } from "../../components/molecules/Form";
import { TaskCard } from "./components/TaskCard";

export const TaskPage: React.FC = () => {
	const today = new Date();

	return (
		<div className="flex h-screen py-12">
			<div className=" w-1/2 flex flex-col">
				<div className="bg-zinc-100 p-8 rounded-lg mb-4">
					<p className="text-zinc-400">Hello, {getCurrentDate(today)} </p>
					<p className="text-2xl font-bold">You've got 7 tasks today.</p>
				</div>
				<Form placeholder="タスクを追加" />
				<div className="overflow-y-scroll">
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
				</div>
			</div>
			<div className="w-1/2">
				<p>hello</p>
			</div>
		</div>
	);
};
