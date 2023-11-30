import { QuickTaskCard } from "./QuickTaskCard";
import { useLoadQuickTasks } from "../../hooks/useLoadQuickTasks";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { quickTasksState } from "../../stores/quickTaskAtom";
import { quickTaskSplitter } from "../../util/quickTaskSplitter";

export const QuickTaskList = () => {
	const [quickTasks] = useRecoilState(quickTasksState);
	const loadQuickTasks = useLoadQuickTasks();
	const { todoQuickTask, doneQuickTask } = quickTaskSplitter(quickTasks);

	useEffect(() => {
		loadQuickTasks();
	}, []);

	return (
		<>
			<div>
				{todoQuickTask.map((task, i) => (
					<QuickTaskCard key={i} task={task} />
				))}
			</div>
			<div>
				{doneQuickTask.map((task, i) => (
					<QuickTaskCard key={i} task={task} />
				))}
			</div>
		</>
	);
};
