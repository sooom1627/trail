import React from "react";

interface ButtonProps {
	childlen: React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const AtentionButton: React.FC<ButtonProps> = ({
	childlen,
	onClick,
}) => (
	<button
		type="submit"
		className="p-2.5 ms-2 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
		onClick={onClick}
	>
		{childlen}
	</button>
);
