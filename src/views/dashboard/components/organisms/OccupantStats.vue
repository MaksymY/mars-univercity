<template>
	<div class="occupant">
		<img class="occupant__photo" :src="occupant.profile_picture" alt="Photo de profile" />
		<div class="occupant__identity">
			<span>{{ occupant.firstName }} {{ occupant.lastName }}</span>
		</div>
		<canvas :id="`${occupant.firstName}-canvas`" class="occupant__chart"></canvas>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Chart, registerables, ChartConfiguration } from "chart.js";

Chart.register(...registerables);

import { formatDate } from "@/Utils/DateFormatter";

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
					labels: this.occupant.oxymetre_values.map((v: any) => formatDate(v.time)),
					datasets: [
						{
							data: this.occupant.oxymetre_values.map((v: any) => v.value),
							fill: false,
							borderColor: "rgb(75, 192, 192)",
							tension: 0.5,
						},
					],
				},
				options: {
					scales: {
						y: {
							display: false,
						},
						x: {
							display: false,
						},
					},
					plugins: {
						legend: {
							display: false,
						},
					},
					elements: {
						point: {
							radius: 0,
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
	padding: 0.5rem;
	display: flex;
	align-items: center;

	font-size: 14px;

	&__photo {
		width: 70px;
		height: 70px;
		margin-right: 0.5rem;
	}

	&__identity {
		font-weight: bold;
	}

	&__chart {
		max-width: 70px;
		max-height: 70px;
		margin-left: auto;
	}
}
</style>
