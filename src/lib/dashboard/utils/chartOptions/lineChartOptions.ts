import { ApexOptions } from "apexcharts";

export const lineChartOptions = (colorData:string[]):ApexOptions =>{
  return{
    chart: {
      type: "bar",
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
    colors:colorData,
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
}