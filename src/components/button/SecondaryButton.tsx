import React from "react";

interface ButtonProps {
	childlen: React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SecondaryButton: React.FC<ButtonProps> = ({
	childlen,
	onClick,
}) => {
	return (
		<button
			type="submit"
			className="flex justify-center items-center p-1.5 text-sm font-semibold rounded-full cursor-pointer border border-transparent text-zinc-800 hover:bg-zinc-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-zinc-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-600"
			onClick={onClick}
		>
			{childlen}
		</button>
	);
};
