import { AlertIcon } from "@/components/icons/AlertIcon";
import { InfoIcon } from "@/components/icons/InfoIcon";

interface AlertTextProps {
	todoHabitCount: number;
}

export const AlertText: React.FC<AlertTextProps> = (todoHabitCount) => {
	return (
		<>
			{todoHabitCount.todoHabitCount > 0 ? (
				<div
					className="flex items-center p-2 my-2 text-xs text-red-800 rounded-lg bg-red-50"
					role="alert"
				>
					<AlertIcon />
					<div>
						<span className="font-bold ml-1">Oops!!</span> The habit still
						remains! 🤯
					</div>
				</div>
			) : (
				<div
					className="flex items-center p-2 my-2 text-xs text-green-800 rounded-lg bg-green-50"
					role="alert"
				>
					<InfoIcon />
					<div>
						<span className="font-bold ml-1">Good!!</span> All habit already
						done! 🎉
					</div>
				</div>
			)}
		</>
	);
};
