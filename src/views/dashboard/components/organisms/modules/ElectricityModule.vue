<template>
	<ModuleLayout
		label="Électricité"
		:chart-config="chartConfig"
		:custom-chart-style="chartStyle"
		icon="electricity-icon"
	></ModuleLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ChartConfiguration } from "chart.js";

import ModuleLayout from "../ModuleLayout.vue";

export default defineComponent({
	name: "ElectricityModule",
	components: {
		ModuleLayout,
	},
	props: {
		dataSets: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			chartConfig: {
				type: "bar",
				data: {
					labels: this.dataSets.map((dataSet: any) =>
						dataSet._time.split("T")[1].split(".")[0].substring(3),
					),
					datasets: [
						{
							barThickness: 6,
							data: this.dataSets.map((dataSet: any) => dataSet._value),
							borderRadius: 20,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
					plugins: {
						legend: {
							display: false,
						},
					},
				},
			} as ChartConfiguration,
			chartStyle: {
				linearGradient: { firstColor: "#FF23CF", secondColor: "#824FED" },
			},
		};
	},
});
</script>
