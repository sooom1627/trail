import { useState } from "react";
import { TextInput } from "@/components/input/TextInput";
import { Modal } from "@/components/modal/Modal";
import { HighIcon } from "@/components/icons/priority/HighIcon";
import { HighestIcon } from "@/components/icons/priority/HighestIcon";
import { LowIcon } from "@/components/icons/priority/LowIcon";
import { LowestIcon } from "@/components/icons/priority/LowestIcon";
import { MiddleIcon } from "@/components/icons/priority/MiddleIcon";

const priorityConfig = [
	{ label: "Lowest", color: "sky", icon: <LowestIcon /> },
	{ label: "Low", color: "sky", icon: <LowIcon /> },
	{ label: "Middle", color: "green", icon: <MiddleIcon /> },
	{ label: "High", color: "red", icon: <HighIcon /> },
	{ label: "Highest", color: "red", icon: <HighestIcon /> },
];

export const TaskEditModal = () => {
	const [formValue, setFormValue] = useState<string>("");
	const [selectedPriority, setSelectedPriority] = useState<string>("Middle");

	return (
		<Modal modalTitle="Modal Title">
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
							{priority.icon}
							<div className="w-full text-sm">{priority.label}</div>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};
