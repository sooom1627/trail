import { PlusIcon } from "@/components/icons/action/PlusIcon";
import { useSaveQuickTasks } from "../../hooks/useSaveQuickTasks";
import { useState } from "react";

export const AddQuickTaskForm = () => {
	const [formValue, setFormValue] = useState<string>("");
	const saveQuickTask = useSaveQuickTasks();
	const saveQuickTaskHandler = () => {
		saveQuickTask(formValue);
		setFormValue("");
	};
	return (
		<form
			className="flex justify-between grow border-b focus-within:border-zinc-500"
			name="input"
		>
			<input
				type="text"
				className="grow text-xs font-medium p-2 focus:outline-0"
				placeholder="クイックタスクを追加"
				value={formValue}
				onChange={(e) => setFormValue(e.target.value)}
			/>
			<button type="submit" onClick={() => saveQuickTaskHandler()}>
				<PlusIcon color="text-zinc-500" />
			</button>
		</form>
	);
};
