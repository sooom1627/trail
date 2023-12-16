import { PrimaryButton } from "@/components/button/PrimaryButton";
import { PlusIcon } from "@/components/icons/action/PlusIcon";
import { TextInput } from "@/components/input/TextInput";
import { useState } from "react";
import { useSaveTags } from "../../hooks/useSaveTags";

export const AddTagsForm = () => {
	const [formValue, setFormValue] = useState("");
	const saveTags = useSaveTags();

	const handleSaveTags = (event: React.MouseEvent) => {
		event.preventDefault();
		if (formValue !== "") {
			saveTags(formValue);
			setFormValue("");
		} else {
			console.log("hello");
		}
	};
	return (
		<form className="flex items-centerl">
			<label htmlFor="addTag" className="sr-only">
				add
			</label>
			<div className="relative w-full">
				<TextInput
					id="addTag"
					placeholder="Create New Tag!"
					value={formValue}
					onChange={setFormValue}
				/>
			</div>
			<PrimaryButton
				onClick={(e) => {
					handleSaveTags(e);
				}}
				children={<PlusIcon />}
			></PrimaryButton>
		</form>
	);
};
