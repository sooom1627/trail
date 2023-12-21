import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

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
	xaxis: {
		categories: ["12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"],
	},
	legend: {
		position: "top",
		horizontalAlign: "right",
	},
};

const series = [
	{
		name: "ArrayTask",
		data: [10, 41, 49, 62, 69, 91, 148],
	},
	{
		name: "Work",
		data: [80, 34, 62, 51, 90, 43, 34],
	},
];

export const WeeklyLineChart = () => {
	return (
		<>
			<p className="p-2 font-bold text-lg">Weekly Trend</p>
			<div className="bg-zinc-100 p-4 rounded-lg max-h-72">
				<ReactApexChart
					options={options}
					series={series}
					type="line"
					height={260}
				/>
			</div>
		</>
	);
};
