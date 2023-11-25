import React from "react";

interface ButtonProps {
	childlen: React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ childlen, onClick }) => (
	<button
		type="submit"
		className="p-2.5 ms-2 text-sm font-medium text-white bg-zinc-700 rounded-lg border border-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
		onClick={onClick}
	>
		{childlen}
	</button>
);
