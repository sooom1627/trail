import { PrimaryButton } from "@/components/button/PrimaryButton";
import { PlusIcon } from "@/components/icons/action/PlusIcon";
import { TextInput } from "@/components/input/TextInput";
import { useState } from "react";

export const AddTagsForm = () => {
	const [formValue, setFormValue] = useState("");
	return (
		<form className="flex items-centerl">
			<label htmlFor="addTag" className="sr-only">
				add
			</label>
			<div className="relative w-full">
				<TextInput
					id="addTag"
					placeholder="タグを追加"
					value={formValue}
					onChange={setFormValue}
				/>
			</div>
			<PrimaryButton
				onClick={(e) => {
					alert("hello");
				}}
				children={<PlusIcon />}
			></PrimaryButton>
		</form>
	);
};
