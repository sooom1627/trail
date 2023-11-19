import React from "react";

interface FormProps {
	placeholder: string;
}

export const Form: React.FC<FormProps> = (props) => {
	const { placeholder } = props;
	return (
		<>
			<form className="flex items-center">
				<label htmlFor="simple-search" className="sr-only">
					Search
				</label>
				<div className="relative w-full">
					<input
						type="text"
						id="simple-search"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500"
						placeholder={placeholder}
					/>
				</div>
				<button
					type="submit"
					className="p-2.5 ms-2 text-sm font-medium text-white bg-zinc-700 rounded-lg border border-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
				>
					<svg
						className="w-4 h-4 text-white dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</button>
			</form>
		</>
	);
};
