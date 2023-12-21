import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useGetWeeklyPieChartData } from "../../hooks/useGetWeeklyPieChartData";
import { Task } from "@/lib/task/interface/Task";
import { Tag } from "@/lib/tag/interface/Tag";
import { pieChartOptions } from "../../utils/chartOptions/pieChartOptions";

interface WeeklyPieChartProps {
	tasks: Task[];
	tags: Tag[];
}

export const WeeklyPieChart: React.FC<WeeklyPieChartProps> = ({
	tasks,
	tags,
}) => {
	const [pieChartData, setPieChartData] = useState<number[]>();
	const [pieChartLabel, setPieChartLabel] = useState<string[]>();
	const [pieChartColor, setPieChartColor] = useState<string[]>();
	const [chartOptions, setChartOptions] = useState<ApexOptions>(
		pieChartOptions(pieChartLabel || [], pieChartColor || [])
	);

	const getWeeklyPieChartData = useGetWeeklyPieChartData({
		setPieChartData,
		setPieChartLabel,
		setPieChartColor,
		tasks,
		tags,
	});

	useEffect(() => {
		getWeeklyPieChartData();
	}, [tasks, tags]);

	useEffect(() => {
		setChartOptions((prevOptions) => ({
			...prevOptions,
			labels: pieChartLabel,
			colors: pieChartColor,
		}));
	}, [pieChartLabel]);

	return (
		<>
			<p className="p-2 font-bold text-lg">Task Classification</p>
			<div className="bg-zinc-100 p-4 rounded-lg max-h-72">
				{pieChartData && (
					<ReactApexChart
						options={chartOptions}
						series={pieChartData}
						type="pie"
						height={280}
					/>
				)}
			</div>
		</>
	);
};
