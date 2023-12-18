import { useEffect, useState } from "react";
import { PanelTitle } from "../components/PanelTitle";
import { HandleHabitModal } from "./HandleHabitModal";
import { HabitsList } from "../components/HabitList";
import { useSaveHabits } from "../hooks/useSaveHabits";
import { HabitType } from "../interface/Habit";
import { useLoadHabits } from "../hooks/useLoadHabits";

export const Habit = () => {
	const [toggleModal, setToggleModal] = useState(false);
	const [habits, setHabits] = useState<HabitType[]>([]);
	const [selectedHabits, setSelectedHabits] = useState<HabitType>();
	const saveHabits = useSaveHabits(setHabits);
	const loadHabits = useLoadHabits(setHabits);

	const selectHabitAndToggleModal = (habit: HabitType) => {
		setToggleModal(true);
		setSelectedHabits(habit);
	};

	const createHabitToggleModal = () => {
		setToggleModal(true);
		setSelectedHabits(undefined);
	};

	useEffect(() => {
		loadHabits();
	}, []);

	return (
		<>
			<PanelTitle createHabitToggleModal={createHabitToggleModal} />
			<HabitsList
				habits={habits}
				saveHabits={saveHabits}
				selectHabitAndToggleModal={selectHabitAndToggleModal}
			/>
			<HandleHabitModal
				toggleModal={toggleModal}
				setToggleModal={setToggleModal}
				saveHabits={saveHabits}
				selectedHabit={selectedHabits}
			/>
		</>
	);
};
