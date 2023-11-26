import { useState } from "react";
import { TextInput } from "@/components/input/TextInput";
import { Modal } from "@/components/modal/Modal";
import { Task } from "../../interface/Task";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { useEditTask } from "../../hooks/useEditTask";
import { getPriorityIcon } from "../../utils/getPriorityIcon";

const priorityConfig: {
	label: "Lowest" | "Low" | "Middle" | "High" | "Highest";
	color: string;
}[] = [
	{ label: "Lowest", color: "sky" },
	{ label: "Low", color: "sky" },
	{ label: "Middle", color: "green" },
	{ label: "High", color: "red" },
	{ label: "Highest", color: "red" },
];

interface TaskEditModalProps {
	task: Task;
	toggleModal: boolean;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskEditModal: React.FC<TaskEditModalProps> = ({
	task,
	toggleModal,
	setToggleModal,
}) => {
	const [formValue, setFormValue] = useState<string>(task.title);
	const [selectedPriority, setSelectedPriority] = useState<
		"Lowest" | "Low" | "Middle" | "High" | "Highest"
	>(task.priority);

	const taskEdit = useEditTask({
		taskId: task.id,
		title: formValue,
		priority: selectedPriority,
	});

	const taskEditHandler = () => {
		taskEdit();
		setToggleModal(false);
	};

	return (
		<Modal
			modalTitle={task.title}
			toggleModal={toggleModal}
			setToggleModal={setToggleModal}
			confirmModal={
				<PrimaryButton childlen="Edit" onClick={() => taskEditHandler()} />
			}
		>
			<div>
				<p className="text-sm font-bold pb-2">Title</p>
				<TextInput
					id="simple-search"
					placeholder="タスクを追加"
					value={formValue}
					onChange={setFormValue}
				/>
			</div>
			<div className="mt-4">
				<p className="text-sm font-bold pb-2">Priority</p>
				<ul className="grid w-full md:grid-cols-5 gap-2">
					{priorityConfig.map((priority, i) => (
						<li
							key={i}
							className={`flex items-center text-center text-sm w-full p-2 border-2 rounded-lg cursor-pointer duration-200 hover:border-${
								priority.color
							}-500 ${
								selectedPriority === priority.label
									? `border-${priority.color}-500`
									: "border-zinc-200"
							}`}
							onClick={() => setSelectedPriority(priority.label)}
						>
							{getPriorityIcon(priority.label)}
							<div className="w-full text-sm">{priority.label}</div>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};
