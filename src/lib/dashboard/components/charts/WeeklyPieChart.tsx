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
			<div className="bg-zinc-100 p-4 rounded-lg h-full py-2">
				{pieChartData && (
					<ReactApexChart
						options={chartOptions}
						series={pieChartData}
						type="pie"
						height="110%"
					/>
				)}
			</div>
		</>
	);
};
