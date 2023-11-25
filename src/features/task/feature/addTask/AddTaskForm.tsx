import { useState } from "react";
import { useSaveTask } from "../../hooks/useSaveTask";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { TextInput } from "@/components/input/TextInput";
import { PlusIcon } from "@/components/icons/action/PlusIcon";
import { toast } from "react-toastify";

export const AddTaskForm = () => {
	const [formValue, setFormValue] = useState<string>("");
	const saveTask = useSaveTask();

	const createTaskFunction = (event: React.MouseEvent) => {
		event.preventDefault();
		if (formValue !== "") {
			saveTask(formValue);
			setFormValue("");
		} else {
			toast.error("🧐 Task is empty!", {
				position: "top-left",
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
					onClick={(e) => {
						createTaskFunction(e);
					}}
					childlen={<PlusIcon />}
				></PrimaryButton>
			</form>
		</>
	);
};
