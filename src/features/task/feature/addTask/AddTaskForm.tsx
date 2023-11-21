import { useState } from "react";
import { useSaveTask } from "../../hooks/useSaveTask";
import { PrimaryButton } from "../../../../components/button/PrimaryButton";
import { TextInput } from "../../../../components/input/TextInput";

export const AddTaskForm = () => {
	const [formValue, setFormValue] = useState<string>("");
	const saveTask = useSaveTask();

	const createTaskFunction = () => {
		saveTask(formValue);
		setFormValue("");
	};

	return (
		<>
			<form className="flex items-center">
				<label htmlFor="simple-search" className="sr-only">
					Search
				</label>
				<div className="relative w-full">
					<TextInput
						id="simple-search"
						placeholder="タスクを追加"
						value={formValue}
						onChange={setFormValue}
					/>
				</div>
				<PrimaryButton
					onClick={createTaskFunction}
					childlen={
						<svg
							className="w-4 h-4 text-white dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					}
				></PrimaryButton>
			</form>
		</>
	);
};
