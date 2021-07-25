<template>
	<ModuleLayout
		label="Oxygène"
		:chart-config="chartConfig"
		:custom-chart-style="chartStyle"
		icon="oxygen-icon"
	/>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ChartConfiguration } from "chart.js";

import ModuleLayout from "../ModuleLayout.vue";

export default defineComponent({
	name: "OxygenModule",
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
					labels: ["13h", "13h30", "14h", "15h", "15h30", "16h"],
					datasets: [
						{
							barThickness: 6,
							data: [2700, 2800, 2100, 2540, 2600, 2230],
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
				linearGradient: { firstColor: "#4DFFDF", secondColor: "#4DA1FF" },
			},
		};
	},
});
</script>
