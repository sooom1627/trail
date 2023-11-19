import React from "react";

interface FormProps {
	placeholder: string;
}

export const Form: React.FC<FormProps> = (props) => {
	const { placeholder } = props;
	return (
		<>
			<form>
				<div className="relative">
					<input
						type="search"
						id="default-search"
						className="w-full p-3 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-zinc-500 focus:border-zinc-500"
						placeholder={placeholder}
					/>
					<button
						type="submit"
						className="text-white font-bold absolute end-2.5 bottom-1.5 bg-zinc-700 hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-lg text-sm px-2 py-2"
					>
						<svg
							className="w-4 h-4 text-white "
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
				</div>
			</form>
		</>
	);
};
