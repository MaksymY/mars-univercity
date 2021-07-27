<template>
	<div class="room-data-item">
		<div class="room-data-item__left-side">
			<Icon class="room-data-item__left-side__icon" :href="icon" />
			<div class="room-data-item__left-side__metas">
				<h3 class="title">{{ label }}</h3>
				<slot name="left-side-infos" />
			</div>
		</div>
		<canvas v-if="chartConfig" :id="`${label}-canvas`"></canvas>
		<slot name="content" />
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Icon from "@/components/atoms/Icon.vue";

import { Chart, registerables, ChartConfiguration } from "chart.js";

export default defineComponent({
	name: "MiniRoomDataItem",
	components: {
		Icon,
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		chartConfig: {
			type: Object as PropType<ChartConfiguration>,
			default: null,
		},
		customChartStyle: {
			type: Object,
			default: null,
		},
		icon: {
			type: String,
			required: true,
		},
		values: {
			type: Array,
			default: () => [],
		},
		dangerValue: {
			type: Number,
			default: -3,
		},
	},
	mounted(): void {
		if (this.chartConfig) {
			this.initChart();
		}
	},
	methods: {
		initChart(): void {
			const ctx: HTMLCanvasElement = document.getElementById(
				`${this.label}-canvas`,
			) as HTMLCanvasElement;
			const customStyle = this.getChartCustomStyle(ctx);
			const chartConfigDataSets = this.chartConfig.data.datasets;
			const definitivDataSets = [{ ...chartConfigDataSets[0], ...customStyle }];
			let definitivChartConfig = { ...this.chartConfig };
			definitivChartConfig.data.datasets = definitivDataSets;
			new Chart(ctx, definitivChartConfig);
		},
		// @TODO fix types here
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getChartCustomStyle(ctx: HTMLCanvasElement): any {
			if (!this.customChartStyle) {
				return {};
			}
			const twoDimensionsCtx = ctx.getContext("2d");
			if (this.customChartStyle.linearGradient) {
				let linearGradient: any;
				let dangerGradient: any;
				if (twoDimensionsCtx) {
					linearGradient = twoDimensionsCtx.createLinearGradient(
						0,
						0,
						0,
						(twoDimensionsCtx.canvas.height * 2) / 2,
					);
					linearGradient.addColorStop(0, this.customChartStyle.linearGradient.firstColor);
					linearGradient.addColorStop(1, this.customChartStyle.linearGradient.secondColor);

					dangerGradient = twoDimensionsCtx.createLinearGradient(
						0,
						0,
						0,
						(twoDimensionsCtx.canvas.height * 2) / 2,
					);
					dangerGradient.addColorStop(0, "red");
					dangerGradient.addColorStop(1, "orange");
				}

				const rightGradients = this.values.map((value: any) => {
					return value < this.dangerValue ? dangerGradient : linearGradient;
				});
				return {
					backgroundColor: rightGradients,
				};
			}
			return {};
		},
	},
});
</script>

<style lang="scss" scoped>
.room-data-item {
	max-height: 100px;
	max-width: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	padding: 0.5rem;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;

	&__left-side {
		display: flex;
		font-size: 14px;
		max-width: 100%;

		&__icon {
			width: 50px;
			height: 50px;
			margin-right: 0.5rem;
		}

		&__metas {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.title {
				font-weight: normal;
				margin: 0;
				text-align: start;
			}
		}
	}

	canvas {
		max-width: 20%;
		width: 20%;
		max-height: 80%;
	}
}
</style>
