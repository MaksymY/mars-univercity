<template>
	<ModuleLayout
		label="Électricité"
		:chart-config="chartConfig"
		:custom-chart-style="chartStyle"
		icon="electricity-icon"
		:values="dataSets.map((dataSet) => dataSet._value)"
	>
		<template #header-right-content> {{ dataSets[dataSets.length - 1]._value }} Watts </template>
	</ModuleLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ChartConfiguration } from "chart.js";

import ModuleLayout from "../ModuleLayout.vue";

import { formatDate } from "@/Utils/DateFormatter";

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
					labels: this.dataSets.map((dataSet: any) => formatDate(dataSet._time)),
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
