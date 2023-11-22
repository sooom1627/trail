import React from "react";
import { Task } from "../interface/Task";

interface TaskCardProps {
	task: Task;
	key: string;
}

export const TaskCard: React.FC<TaskCardProps> = (task) => {
	return (
		<div className="bg-zinc-100 p-6 rounded-lg mb-2 flex justify-between items-center">
			<div>
				<p>{task.task.title}</p>
				<p className="text-sm text-zinc-400">
					{task.task.created.toLocaleString()}
				</p>
			</div>
			<div className="flex items-center">
				<svg
					className="w-4 h-4 text-zinc-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
				<p className="text-sm ml-4 mr-6">00h 00m 00s </p>
				<svg
					className="w-4 h-4 text-red-500 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 12"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 5 5 1 1 5m8 6L5 7l-4 4"
					/>
				</svg>
			</div>
		</div>
	);
};
