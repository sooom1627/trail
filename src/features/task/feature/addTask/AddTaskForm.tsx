import { useState } from "react";
import { useSaveTask } from "../../hooks/useSaveTask";
import { PrimaryButton } from "../../../../components/button/PrimaryButton";
import { TextInput } from "../../../../components/input/TextInput";
import { PlusIcon } from "../../../../components/icons/action/PlusIcon";

export const AddTaskForm = () => {
	const [formValue, setFormValue] = useState<string>("");
	const saveTask = useSaveTask();

	const createTaskFunction = (event: React.MouseEvent) => {
		event.preventDefault();
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
					childlen={<PlusIcon />}
				></PrimaryButton>
			</form>
		</>
	);
};
