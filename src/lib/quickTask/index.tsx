import { Accrodion } from "@/components/accordion/Accordion";
import { QuickTaskList } from "./feature/quickTaskList/QuickTaskList";

export const QuickTaskPanel = () => {
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
