import { ApexOptions } from "apexcharts";

export const pieChartOptions = (
	pieChartLabel: string[],
	pieChartColor: string[]
): ApexOptions => {
	return {
		chart: {
			type: "pie",
			fontFamily: "kanit, sans-serif",
		},
		labels: pieChartLabel,
		colors: pieChartColor,
		legend: {
			position: "top",
			horizontalAlign: "right",
		},
		dataLabels: {
			enabled: true,
			dropShadow: {
				enabled: false, // ドロップシャドウを無効にする
			}
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