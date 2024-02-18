import { useEffect, useState } from "react";
import { TextInput } from "@/components/input/TextInput";
import { Modal } from "@/components/modal/Modal";
import { Task } from "../../interface/Task";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { useEditTask } from "../../hooks/useEditTask";
import { getPriorityIcon } from "../../utils/getPriorityIcon";
import { AtentionButton } from "@/components/button/AtentionButton";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { useLoadTags } from "@/lib/tag/hooks/useLoadTags";
import { TextArea } from "@/components/input/TextArea";
import { CustomDatePicker } from "@/components/input/CustomDatePicker";

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
	const { tags, loadTags } = useLoadTags();
	const [formValue, setFormValue] = useState<string>(task.title);
	const [selectedDate, setSelectedDate] = useState<Date | undefined>();
	const [memoValue, setMemoValue] = useState<string | undefined>();
	const [taskTag, setTaskTag] = useState<string | undefined>();
	const [selectedPriority, setSelectedPriority] = useState<
		"Lowest" | "Low" | "Middle" | "High" | "Highest"
	>(task.priority);

	useEffect(() => {
		console.log(`${task.deadLine}&${task.created}`);
		setFormValue(task.title ? task.title : "");
		setSelectedPriority(task.priority ? task.priority : "Middle");
		setSelectedDate(task.deadLine ? task.deadLine : undefined);
		setMemoValue(task.memo ? task.memo : "");
		loadTags();
		setTaskTag(task.tag ? task.tag : undefined);
	}, [task, toggleModal]);

	const taskEdit = useEditTask({
		taskId: task.id,
		title: formValue,
		priority: selectedPriority,
		tag: taskTag,
		deadline: selectedDate,
		memo: memoValue,
	});
	const taskDelete = useDeleteTask(task.id);

	const taskEditHandler = async () => {
		await taskEdit();
		setToggleModal(false);
	};

	const taskDeleteHandler = async () => {
		await taskDelete();
		setToggleModal(false);
	};
	return (
		<Modal
			modalTitle={task.title}
			toggleModal={toggleModal}
			setToggleModal={setToggleModal}
			confirmButton={
				<PrimaryButton onClick={() => taskEditHandler()}>Confirm</PrimaryButton>
			}
			deleteButton={
				<AtentionButton onClick={() => taskDeleteHandler()}>
					Delete
				</AtentionButton>
			}
		>
			<div>
				<p className="text-sm font-bold pb-2">Title</p>
				<TextInput
					id="simple-search"
					placeholder="Edit Task Title!"
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
							onClick={() => {
								setSelectedPriority(priority.label);
							}}
						>
							{getPriorityIcon(priority.label)}
							<div className="w-full text-sm">{priority.label}</div>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-4">
				<p className="text-sm font-bold pb-2">Tags</p>
				<ul className="flex gap-2">
					{tags.map((tag) => (
						<li key={tag.id}>
							<span
								onClick={() => {
									if (tag.id === taskTag) {
										setTaskTag(undefined);
									} else {
										setTaskTag(tag.id);
									}
								}}
								className={`${
									tag.id === taskTag
										? `bg-${tag.color}-200`
										: `bg-${tag.color}-100`
								} text-${
									tag.color
								}-800 text-xs font-medium px-2.5 py-0.5 rounded duration-200 hover:bg-${
									tag.color
								}-200 cursor-pointer`}
							>
								{tag.title}
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-4">
				<div className="flex items-center gap-2 cursor-pointer w-fit">
					<p className="text-sm font-bold pb-2 ">Option</p>
				</div>
				<div className="transition-all duration-500 ease-out overflow-hidden max-h-[500px] opacity-100 p-4 bg-zinc-100 rounded-lg">
					<div>
						<p className="text-sm font-bold pb-2 text-zinc-700">Deadline</p>
						<CustomDatePicker
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
						/>
					</div>
					<div className="mt-4">
						<p className="text-sm font-bold pb-2 text-zinc-700">Memo</p>
						<TextArea
							value={memoValue ? memoValue : ""}
							setValue={setMemoValue}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};
