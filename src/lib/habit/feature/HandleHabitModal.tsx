import { AtentionButton } from "@/components/button/AtentionButton";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { TextInput } from "@/components/input/TextInput";
import { Modal } from "@/components/modal/Modal";
import { useEffect, useState } from "react";
import { HabitType } from "../interface/Habit";

interface HandleHabitModalProps {
	toggleModal: boolean;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
	saveHabits: (
		habit: HabitType | string,
		actionType: "create" | "toggleStatus" | "edit" | "delete",
		editTitle?: string
	) => void;
	selectedHabit: HabitType | undefined;
}

export const HandleHabitModal: React.FC<HandleHabitModalProps> = ({
	toggleModal,
	setToggleModal,
	saveHabits,
	selectedHabit,
}) => {
	const [formValue, setFormValue] = useState("");
	const createHabitsHandler = (title: string) => {
		saveHabits(title, "create");
		setFormValue("");
		setToggleModal(false);
	};

	const editHabitsHandler = (habit: HabitType, editTitle: string) => {
		saveHabits(habit, "edit", editTitle);
		setFormValue("");
		setToggleModal(false);
	};

	const deleteHabitsHandler = (habit: HabitType) => {
		saveHabits(habit, "delete");
		setFormValue("");
		setToggleModal(false);
	};

	useEffect(() => {
		setFormValue(selectedHabit ? selectedHabit.title : "");
	}, [selectedHabit]);

	return (
		<Modal
			modalTitle={selectedHabit ? selectedHabit.title : "New Habit"}
			toggleModal={toggleModal}
			setToggleModal={setToggleModal}
			confirmButton={
				<PrimaryButton
					onClick={
						selectedHabit
							? () => editHabitsHandler(selectedHabit, formValue)
							: () => createHabitsHandler(formValue)
					}
				>
					Confirm
				</PrimaryButton>
			}
			deleteButton={
				selectedHabit ? (
					<AtentionButton onClick={() => deleteHabitsHandler(selectedHabit)}>
						Delete
					</AtentionButton>
				) : (
					""
				)
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
