import { Accrodion } from "@/components/accordion/Accordion";
import { useState } from "react";

export const QuickTaskPanel = () => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<div>
				<p className="font-bold w-full">Quick Task</p>
				<p className="text-sm font-medium py-1">
					Manage tasks take less than 5 minutes.
					<br />
					<span className="text-zinc-400">
						(Quick Tasks will be deleted the next day.)
					</span>
				</p>
			</div>
			<div className="max-w-full">
				<Accrodion titleList={["TO DO", "DONE"]}>
					{[
						<div
							key="todo"
							className="py-5 border-b border-zinc-200 dark:border-zinc-70 w-full"
						>
							<div className="flex items-start items-center p-2 w-full">
								<input
									className="accent-white  border-zinc-300 focus:ring-3 focus:ring-zinc-300 h-4 w-4 rounded cursor-pointer transition-transform duration-500 ease-in-out"
									type="checkbox"
									checked={checked}
									onChange={() => setChecked(!checked)}
								/>
								<label
									className={`text-sm ml-3 font-medium text-zinc-900 cursor-pointer truncate cursor-pointer ${
										checked ? "line-through decoration-zinc-700" : ""
									}`}
									onClick={() => setChecked(!checked)}
								>
									I love how Flowbite works
								</label>
							</div>
						</div>,
						<div
							key="done"
							className="py-5 border-b border-zinc-200 dark:border-zinc-70 w-full"
						>
							<div className="flex items-start items-center p-2 w-full">
								<input
									className="accent-white  border-zinc-300 focus:ring-3 focus:ring-zinc-300 h-4 w-4 rounded cursor-pointer transition-transform duration-500 ease-in-out"
									type="checkbox"
									checked={checked}
									onChange={() => setChecked(!checked)}
								/>
								<label
									className={`text-sm ml-3 font-medium text-zinc-900 cursor-pointer truncate cursor-pointer ${
										checked ? "line-through decoration-zinc-700" : ""
									}`}
									onClick={() => setChecked(!checked)}
								>
									I love how Flowbite works
								</label>
							</div>
						</div>,
					]}
				</Accrodion>
			</div>
		</>
	);
};
