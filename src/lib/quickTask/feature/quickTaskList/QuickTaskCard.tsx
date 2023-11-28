import { useState } from "react";

export const QuickTaskCard = () => {
	const [checked, setChecked] = useState(false);
	return (
		<>
			<div className="flex items-start items-center p-2 w-full">
				<input
					className="accent-white  border-zinc-300 focus:ring-3 focus:ring-zinc-300 h-4 w-4 rounded cursor-pointer transition-transform duration-500 ease-in-out"
					type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<label
					className={`text-sm ml-3 font-medium text-zinc-900 cursor-pointer truncate cursor-pointer ${
						checked ? "line-through decoration-zinc-700" : ""
					}`}
					onClick={() => setChecked(!checked)}
				>
					I love how Flowbite works
				</label>
			</div>
		</>
	);
};
