import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useGetWeeklyLineChartData } from "../../hooks/useGetWeeklyLineChartData";
import { Task } from "@/lib/task/interface/Task";
import { useEffect, useState } from "react";

const options: ApexOptions = {
	chart: {
		height: 350,
		type: "line",
		fontFamily: "kanit, sans-serif",
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: true,
			tools: {
				download: false,
			},
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
	},
	grid: {
		row: {
			colors: ["transparent"],
			opacity: 0.5,
		},
	},
	legend: {
		position: "top",
		horizontalAlign: "right",
	},
};

interface WeeklyLineChartProps {
	tasks: Task[];
}

export const WeeklyLineChart: React.FC<WeeklyLineChartProps> = ({ tasks }) => {
	const [series, setSeries] = useState<
		{ name: string; data: { x: string; y: number }[] }[]
	>([]);
	const getWeeklyLineChartData = useGetWeeklyLineChartData({
		tasks,
		setSeries,
	});

	useEffect(() => {
		getWeeklyLineChartData();
	}, [tasks]);
	return (
		<>
			<p className="p-2 font-bold text-lg">Weekly Trend</p>
			<div className="bg-zinc-100 p-4 rounded-lg max-h-72 shadow-md">
				<ReactApexChart
					options={options}
					series={series}
					type="line"
					height={270}
				/>
			</div>
		</>
	);
};
