<template>
	<ModuleLayout label="Taux d'occupation" :chart-config="chartConfig" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ChartConfiguration } from "chart.js";

import ModuleLayout from "../ModuleLayout.vue";

export default defineComponent({
	name: "ElectricityModule",
	components: {
		ModuleLayout,
	},
	props: {
		dataSet: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			chartConfig: {
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
			} as ChartConfiguration,
		};
	},
});
</script>
