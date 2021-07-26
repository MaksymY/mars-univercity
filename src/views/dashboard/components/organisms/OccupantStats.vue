<template>
	<div class="occupant">
		<img class="occupant__photo" :src="occupant.profile_picture" alt="Photo de profile" />
		<div class="occupant__identity">
			<span>{{ occupant.firstName }} {{ occupant.lastName }}</span>
		</div>
		<div class="occupant__stats">
			<img class="occupant__stats__heart" src="@/assets/Vector.svg" alt="Coeur" />
			<span class="occupant__stats__last-oxymetre-value">{{ lastOxymetreValue }}%</span>
			<canvas :id="`${occupant.firstName}-canvas`" class="occupant__stats__chart"></canvas>
		</div>
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
	computed: {
		lastOxymetreValue(): number {
			return Math.round(
				this.occupant.oxymetre_values[this.occupant.oxymetre_values.length - 1].value,
			);
		},
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
	border-radius: 5px;

	font-size: 14px;

	&__photo {
		width: 50px;
		height: 50px;
		margin-right: 0.5rem;
	}

	&__identity {
		font-weight: bold;
	}

	&__stats {
		margin-left: auto;
		display: flex;
		align-items: center;

		&__heart {
			margin-right: 0.2rem;
		}

		&__last-oxymetre-value {
			margin-right: 0.5rem;
			font-size: 16px;
		}

		&__chart {
			max-width: 70px;
			max-height: 50px;
			margin-left: auto;

			background-image: url("../../../../assets/chart_bcg.png");
			background-size: contain;
			background-repeat: no-repeat;
		}
	}
}
</style>
