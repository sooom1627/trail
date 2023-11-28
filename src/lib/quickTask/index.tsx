import { Accrodion } from "@/components/accordion/Accordion";
import { QuickTaskList } from "./feature/quickTaskList/QuickTaskList";
import { InfoIcon } from "@/components/icons/InfoIcon";

export const QuickTaskPanel = () => {
	return (
		<>
			<div className="group relative w-full">
				<div className="flex justify-start items-center w-full">
					<p className="font-bold mr-1">Quick Task</p>
					<InfoIcon />
				</div>
				<div className="pointer-events-none absolute bottom-8 left-0 mt-8 p-2 bg-gray-700 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<p className="text-sm font-medium py-1">
						Manage tasks take less than 5 minutes.
						<br />
						<span className="text-zinc-300">
							(Quick Tasks will be deleted the next day.)
						</span>
					</p>
				</div>
			</div>
			<div className="max-w-full">
				<Accrodion titleList={["TO DO", "DONE"]}>
					{[
						<div
							key="todo"
							className="py-5 border-b border-zinc-200 dark:border-zinc-70 w-full"
						>
							<QuickTaskList />
						</div>,
						<div
							key="done"
							className="py-5 border-b border-zinc-200 dark:border-zinc-70 w-full"
						>
							<QuickTaskList />
						</div>,
					]}
				</Accrodion>
			</div>
		</>
	);
};
