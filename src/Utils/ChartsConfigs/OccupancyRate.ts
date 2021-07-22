import { ChartConfiguration } from "chart.js";

const OccupancyRateChartConfig: ChartConfiguration = {
	type: "doughnut",
	data: {
		labels: ["Purple"],
		datasets: [
			{
				label: "Pers",
				data: [62],
				backgroundColor: ["rgba(153, 102, 255, 0.2)"],
				borderColor: ["rgba(153, 102, 255, 1)"],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
};

export default OccupancyRateChartConfig;
