import { useState } from "react";
import { PanelTitle } from "../components/PanelTitle";
import styles from "@/assets/cyberpunkCheckbox.module.css";
import { HandleHabitModal } from "./HandleHabitModal";

export const Habit = () => {
	const [toggleModal, setToggleModal] = useState(false);
	return (
		<>
			<div className="flex justify-between items-center">
				<PanelTitle />
				<span
					onClick={() => setToggleModal(true)}
					className="bg-zinc-200 text-zinc-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-zinc-300 cursor-pointer"
				>
					+ Create new habit.
				</span>
			</div>
			<div className="h-full overflow-y-auto pb-8 mt-2">
				<div className="flex items-center p-2 w-ful">
					<input className={styles.cyberpunkCheckbox} type="checkbox" />
					<label
						className={`text-sm ml-3 font-medium text-zinc-900 truncate cursor-pointer grow `}
					>
						係数確認
					</label>
					<p className="text-xs font-medium text-zinc-400">21:00</p>
				</div>
			</div>
			<HandleHabitModal
				toggleModal={toggleModal}
				setToggleModal={setToggleModal}
			/>
		</>
	);
};
