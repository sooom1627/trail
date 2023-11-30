import { Accrodion } from "@/components/accordion/Accordion";
import { QuickTaskCard } from "./QuickTaskCard";
import { useLoadQuickTasks } from "../../hooks/useLoadQuickTasks";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { quickTasksState } from "../../stores/quickTaskAtom";

export const QuickTaskList = () => {
	const [quickTasks] = useRecoilState(quickTasksState);
	const loadQuickTasks = useLoadQuickTasks();

	useEffect(() => {
		loadQuickTasks();
	}, []);

	return (
		<>
			<div>{quickTasks.map((task) => task.title)}</div>
			<Accrodion titleList={["TO DO", "DONE"]}>
				{[
					<div
						key="todo"
						className="py-5 border-b border-zinc-200 border-dashed dark:border-zinc-70 w-full"
					>
						<div>
							{[1, 2].map((i) => (
								<QuickTaskCard key={i} />
							))}
						</div>
					</div>,
					<div
						key="done"
						className="py-5 border-b border-zinc-200 border-dashed dark:border-zinc-70 w-full"
					>
						<div>
							{[1, 2].map((i) => (
								<QuickTaskCard key={i} />
							))}
						</div>
					</div>,
				]}
			</Accrodion>
		</>
	);
};
