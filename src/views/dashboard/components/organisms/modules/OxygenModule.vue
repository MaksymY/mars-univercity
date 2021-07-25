<template>
	<ModuleLayout
		label="Oxygène"
		:chart-config="chartConfig"
		:custom-chart-style="chartStyle"
		icon="oxygen-icon"
	>
		<template #header-right-content> {{ dataSets[dataSets.length - 1]._value }} % </template>
	</ModuleLayout>
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
				linearGradient: { firstColor: "#4DFFDF", secondColor: "#4DA1FF" },
			},
		};
	},
});
</script>
