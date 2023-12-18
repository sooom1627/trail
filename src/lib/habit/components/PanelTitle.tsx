import { InfoIcon } from "@/components/icons/InfoIcon";

interface PanelTitleProps {
	createHabitToggleModal: () => void;
}

export const PanelTitle: React.FC<PanelTitleProps> = ({
	createHabitToggleModal,
}) => {
	return (
		<div className="flex justify-between items-center relative">
			<div className="group">
				<div className="flex justify-start items-center min-w-fit">
					<p className="font-bold mr-1">Habit Manger</p>
					<InfoIcon />
				</div>
				<div className="pointer-events-none absolute top-1 left-1 z-10 w-11/12 mt-8 p-2 bg-zinc-700 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<p className="text-sm font-medium py-1">
						Track of the tasks you must perform every day!
						<br />
						<span className="text-zinc-300">
							(Habit items are initialized daily at 0:00.)
						</span>
					</p>
				</div>
			</div>
			<div
				onClick={() => createHabitToggleModal()}
				className="bg-zinc-200 text-zinc-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-zinc-300 cursor-pointer"
			>
				+ Create new habit.
			</div>
		</div>
	);
};
