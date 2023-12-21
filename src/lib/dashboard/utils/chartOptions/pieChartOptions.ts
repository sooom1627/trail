import { ApexOptions } from "apexcharts";

export const pieChartOptions = (
	pieChartLabel: string[],
	pieChartColor: string[]
): ApexOptions => {
	return {
		chart: {
			type: "pie",
		},
		labels: pieChartLabel,
		colors: pieChartColor,
		legend: {
			position: "top",
			horizontalAlign: "right",
		},
		tooltip: {
			y: {
				formatter: function (value: number) {
					const hours = Math.floor(value / 60);
					const minutes = value % 60;
					return (
						hours.toString().padStart(2, "0") +
						"h" +
						minutes.toString().padStart(2, "0") +
						"m"
					);
				},
			},
		},
	};
};