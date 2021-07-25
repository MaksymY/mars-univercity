<template>
	<ModuleLayout label="Temperature">
		<div class="temperature-layout">
			<div class="temperature-layout__circle">
				<span>23 deg</span>
			</div>
		</div>
	</ModuleLayout>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ChartConfiguration } from "chart.js";

import ModuleLayout from "../ModuleLayout.vue";

export default defineComponent({
	name: "TemperatureModule",
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

<style lang="scss" scoped>
.temperature-layout {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	&__circle {
		border: 2px solid $white;
		border-radius: 50%;
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
