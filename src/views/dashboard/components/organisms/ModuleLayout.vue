<template>
	<div class="module-layout">
		<div class="module-layout__header">
			<Icon class="module-layout__header__icon" :href="icon || 'bulb-icon'" />
			<h3 class="module-layout__header__title">{{ label }}</h3>
			<div class="module-layout__header__infos">
				<slot name="header-right-content"></slot>
			</div>
		</div>
		<canvas v-if="chartConfig" :id="`${label}-canvas`"></canvas>
		<slot name="content" />
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Chart, registerables, ChartConfiguration } from "chart.js";

import Icon from "@/components/atoms/Icon.vue";

Chart.register(...registerables);

export default defineComponent({
	name: "ModuleLayout",
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
	computed: {
		canvasDimensions() {
			const canvasParent: Element | null = document.querySelector(".module-layout");
			if (canvasParent) {
				const cs = getComputedStyle(canvasParent);
				return {
					width: parseInt(cs.getPropertyValue("width"), 10),
					height: parseInt(cs.getPropertyValue("height"), 10),
				};
			}
			return null;
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

<style lang="scss">
.module-layout {
	background-color: $BlackRussian;
	color: white;
	padding: $m;
	border-radius: 10px;
	display: flex;
	flex-direction: column;

	&__header {
		display: flex;
		align-items: center;

		&__icon {
			width: 24px;
			height: 24px;
			margin-right: $xxs;

			fill: $white;
			stroke: $white;
		}

		&__title {
			font-size: 21px;
		}

		&__infos {
			margin-left: auto;
			font-size: 16px;
			font-weight: bold;
		}
	}

	canvas {
		max-height: 80%;
	}
}
</style>
