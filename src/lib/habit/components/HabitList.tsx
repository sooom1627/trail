import styles from "@/assets/cyberpunkCheckbox.module.css";
import { HabitType } from "../interface/Habit";
import { EditIcon } from "@/components/icons/action/EditIcon";

interface HabitsListProps {
	habits: HabitType[];
	selectHabitAndToggleModal: (habit: HabitType) => void;
	saveHabits: (habit: HabitType, actionType: "create" | "toggleStatus") => void;
}

export const HabitsList: React.FC<HabitsListProps> = ({
	habits,
	selectHabitAndToggleModal,
	saveHabits,
}) => {
	return (
		<div className="h-full overflow-y-auto pb-8 mt-2">
			{habits.length > 0
				? habits.map((habit) => (
						<div className="flex items-center p-2 w-ful" key={habit.id}>
							<input
								id={habit.id}
								className={styles.cyberpunkCheckbox}
								type="checkbox"
								checked={habit.status === "done"}
								onChange={() => saveHabits(habit, "toggleStatus")}
							/>
							<label
								htmlFor={habit.id}
								className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow ${
									habit.status === "done"
										? "line-through decoration-zinc-500 text-zinc-400"
										: ""
								}`}
							>
								{habit.title}
							</label>
							<div
								className="w-fit cursor-pointer"
								onClick={() => selectHabitAndToggleModal(habit)}
							>
								<EditIcon />
							</div>
						</div>
				  ))
				: ""}
		</div>
	);
};
