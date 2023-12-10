import { PlusIcon } from "@/components/icons/action/PlusIcon";
import { useSaveQuickTasks } from "../../hooks/useSaveQuickTasks";
import { useCallback } from "react";
import { toast } from "react-toastify";

const toastConfig = {
	position: toast.POSITION.TOP_LEFT,
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light" as const,
};

interface AddQuickTaskFormProps {
	formValue: string;
	setFormValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AddQuickTaskForm: React.FC<AddQuickTaskFormProps> = ({
	formValue,
	setFormValue,
}) => {
	const saveQuickTask = useSaveQuickTasks();

	const saveQuickTaskHandler = useCallback(
		(event: React.FormEvent) => {
			event.preventDefault();
			if (formValue !== "") {
				saveQuickTask(formValue);
				setFormValue("");
			} else {
				toast.error("🧐 Task is empty!", toastConfig);
			}
		},
		[formValue, saveQuickTask]
	);

	return (
		<form
			className="flex justify-between grow border-b focus-within:border-zinc-500"
			name="input"
			onSubmit={saveQuickTaskHandler}
		>
			<input
				type="text"
				className="grow text-xs font-medium p-2 focus:outline-0"
				placeholder="クイックタスクを追加"
				value={formValue}
				onChange={(e) => setFormValue(e.target.value)}
			/>
			<button type="submit">
				<PlusIcon color="text-zinc-500" />
			</button>
		</form>
	);
};
