import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useGetWeeklyLineChartData } from "../../hooks/useGetWeeklyLineChartData";
import { Task } from "@/lib/task/interface/Task";
import { useEffect, useState } from "react";
import { Tag } from "@/lib/tag/interface/Tag";
import { lineChartOptions } from "../../utils/chartOptions/lineChartOptions";

interface WeeklyLineChartProps {
	tasks: Task[];
	tags: Tag[];
}

export const WeeklyLineChart: React.FC<WeeklyLineChartProps> = ({
	tasks,
	tags,
}) => {
	const [series, setSeries] = useState<
		{ name: string; data: { x: string; y: number }[] }[]
	>([]);
	const [colorData, setColorData] = useState<string[]>([]);
	const [chartOptions, setChartOptions] = useState<ApexOptions>(
		lineChartOptions([])
	);
	const getWeeklyLineChartData = useGetWeeklyLineChartData({
		setSeries,
		setColorData,
		tasks,
		tags,
	});

	useEffect(() => {
		getWeeklyLineChartData();
	}, [tasks]);

	useEffect(() => {
		setChartOptions((prevOptions) => ({
			...prevOptions,
			colors: colorData,
		}));
	}, [colorData]);
	return (
		<>
			<div className="bg-zinc-100 p-4 rounded-lg h-full">
				<ReactApexChart
					options={chartOptions}
					series={series}
					type="bar"
					height="100%"
				/>
			</div>
		</>
	);
};
