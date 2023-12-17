import { InfoIcon } from "@/components/icons/InfoIcon";

export const PanelTitle = () => {
	return (
		<div className="group relative">
			<div className="flex justify-start items-center min-w-fit">
				<p className="font-bold mr-1">Quick Task</p>
				<InfoIcon />
			</div>
			<div className="pointer-events-none absolute top-1 z-10 w-72 left-2 mt-8 p-2 bg-zinc-700 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
				<p className="text-sm font-medium py-1">
					Manage tasks take less than 5 minutes.
					<br />
					<span className="text-zinc-300">
						(Quick Tasks will be deleted the next day.)
					</span>
				</p>
			</div>
		</div>
	);
};
