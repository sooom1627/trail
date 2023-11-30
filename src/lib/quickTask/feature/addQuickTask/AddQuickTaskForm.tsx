import { PlusIcon } from "@/components/icons/action/PlusIcon";
import { useSaveQuickTasks } from "../../hooks/useSaveQuickTasks";
import { useState } from "react";
import { toast } from "react-toastify";

export const AddQuickTaskForm = () => {
	const [formValue, setFormValue] = useState<string>("");
	const saveQuickTask = useSaveQuickTasks();
	const saveQuickTaskHandler = () => {
		if (formValue !== "") {
			saveQuickTask(formValue);
			setFormValue("");
		} else {
			toast.error("🧐 Task is empty!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
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
