import { AlertIcon } from "@/components/icons/alertIcon";

export const AlertText = () => {
	return (
		<div
			className="flex items-center p-2 my-2 text-xs text-red-800 rounded-lg bg-red-50"
			role="alert"
		>
			<AlertIcon />
			<div>
				<span className="font-bold">Oops!!</span> The habit still remains! 🤯
			</div>
		</div>
	);
};
