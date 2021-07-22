<template>
	<ModuleLayout label="Électricité" :chart-config="chartConfig" :custom-chart-style="chartStyle" />
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
							label: "# of Votes",
							barThickness: 6,
							data: [12, 19, 3, 5, 2, 3],
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
			chartStyle: {
				linearGradient: { firstColor: "red", secondColor: "blue" },
			},
		};
	},
});
</script>
