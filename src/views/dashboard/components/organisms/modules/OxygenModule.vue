<template>
	<ModuleLayout
		label="Oxygène"
		:chart-config="chartConfig"
		:custom-chart-style="chartStyle"
		icon="oxygen-icon"
		:values="dataSets.map((dataSet) => dataSet._value)"
		:danger-value="dangerValue"
	>
		<template #header-right-content>
			<div
				:class="[
					'header-value',
					{ danger: dataSets[dataSets.length - 1]._value < chartStyle.dangerValue },
				]"
			>
				<span v-if="dataSets[dataSets.length - 1]._value < chartStyle.dangerValue"
					>Taux d'oxygène insufisant
				</span>
				<span>{{ dataSets[dataSets.length - 1]._value }} %</span>
			</div>
		</template>
	</ModuleLayout>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ChartConfiguration } from "chart.js";

import ModuleLayout from "../ModuleLayout.vue";

import { formatDate } from "@/Utils/DateFormatter";

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
				linearGradient: { firstColor: "#4DFFDF", secondColor: "#4DA1FF" },
			},
			dangerValue: 20,
		};
	},
});
</script>

<style lang="scss" scoped>
.header-value {
	&.danger {
		color: red;
	}
}
</style>
