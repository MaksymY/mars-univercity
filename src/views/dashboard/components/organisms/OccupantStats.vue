<template>
	<div class="occupant">
		<img :src="occupant.profile_picture" alt="Photo de profile" />
		<span>{{ occupant.firstName }}</span>
		<span>{{ occupant.lastName }}</span>
		<canvas :id="`${occupant.firstName}-canvas`"></canvas>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Chart, registerables, ChartConfiguration } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
	name: "OccupantStats",
	props: {
		occupant: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			chartConfig: {
				type: "line",
				data: {
					labels: this.occupant.oxymetre_values.map((v: any) =>
						v.time.split("T")[1].split(".")[0].substring(3),
					),
					datasets: [
						{
							label: "My First Dataset",
							data: this.occupant.oxymetre_values.map((v: any) => v.value),
							fill: false,
							borderColor: "rgb(75, 192, 192)",
							tension: 0.1,
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
		};
	},
	mounted(): void {
		this.initChart();
	},
	methods: {
		initChart(): void {
			const ctx: HTMLCanvasElement = document.getElementById(
				`${this.occupant.firstName}-canvas`,
			) as HTMLCanvasElement;
			new Chart(ctx, this.chartConfig);
		},
	},
});
</script>

<style lang="scss" scoped>
.occupant {
	background-color: rgb(44, 20, 129);
	padding: 0.5rem;
}
</style>
