import { AtentionButton } from "@/components/button/AtentionButton";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { TextInput } from "@/components/input/TextInput";
import { Modal } from "@/components/modal/Modal";
import { useState } from "react";

interface HandleHabitModalProps {
	toggleModal: boolean;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HandleHabitModal: React.FC<HandleHabitModalProps> = ({
	toggleModal,
	setToggleModal,
}) => {
	const [formValue, setFormValue] = useState("");
	return (
		<Modal
			modalTitle="テスト"
			toggleModal={toggleModal}
			setToggleModal={setToggleModal}
			confirmButton={
				<PrimaryButton onClick={() => alert("hello")}>Confirm</PrimaryButton>
			}
			deleteButton={
				<AtentionButton onClick={() => alert("hello")}>Delete</AtentionButton>
			}
		>
			<div>
				<p className="text-sm font-bold pb-2">Title</p>
				<TextInput
					id="editTagTitle"
					placeholder="Edit Task Title!"
					value={formValue}
					onChange={setFormValue}
				/>
			</div>
		</Modal>
	);
};
