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
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							barThickness: 6,
							data: [12, 19, 3, 5, 2, 3],
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
