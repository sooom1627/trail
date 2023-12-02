import React, { useEffect, useState } from "react";
import { useLoadTasks } from "./hooks/useLoadTasks";
import { taskSplitter } from "./utils/useTaskSplitter";
import { AddTaskForm } from "./feature/addTask/AddTaskForm";
import { TaskPanel } from "./feature/taskPanel/TaskPanel";
import { TaskPageHeading } from "./ui/heading/TaskPageHeading";
import { TaskTabs } from "./ui/TaskTabs/TaskTab";
import { useRecoilState } from "recoil";
import { ModalContext } from "./srtores/context/ModalContext";
import { selectedTasksState } from "./srtores/atom/taskAtom";
import { TaskEditModal } from "./feature/editTask/TaskEditModal";

export const TaskPage: React.FC = () => {
	const [selectedTask] = useRecoilState(selectedTasksState);
	const [tasks, loadTasks] = useLoadTasks();
	const [toggleModal, setToggleModal] = useState<boolean>(false);
	const { todoTasks, doingTasks, doneTasks } = taskSplitter(tasks);

	useEffect(() => {
		loadTasks();
	}, []);

	return (
		<ModalContext.Provider value={{ toggleModal, setToggleModal }}>
			<TaskPageHeading doneTasks={doneTasks} />
			<TaskPanel doneTasks={doneTasks} />
			<AddTaskForm />
			<TaskTabs
				todoTasks={todoTasks}
				doingTasks={doingTasks}
				doneTasks={doneTasks}
			/>
			{selectedTask && (
				<TaskEditModal
					task={selectedTask}
					toggleModal={toggleModal}
					setToggleModal={setToggleModal}
				/>
			)}
		</ModalContext.Provider>
	);
};
