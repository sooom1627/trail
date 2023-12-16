import { InfoIcon } from "@/components/icons/InfoIcon";

export const TrackChartHeading = () => {
	return (
		<div className="group relative w-full mb-4">
			<div className="flex justify-start items-center w-full">
				<p className="font-bold mr-1">Today's Flow</p>
				<InfoIcon />
			</div>
			<div className="pointer-events-none absolute bottom-8 left-0 mt-8 p-2 bg-zinc-700 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
				<p className="text-sm font-medium py-1">
					Track execution time of tasks completed today.
					<br />
					<span className="text-zinc-300">
						(Quick Tasks & Tasks of less than 1 minute will not be reflected.)
					</span>
				</p>
			</div>
		</div>
	);
};
