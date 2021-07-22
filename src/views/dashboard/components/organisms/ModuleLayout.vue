<template>
	<div class="module-layout">
		<div class="module-layout__header">
			<Icon class="module-layout__header__icon" href="people-square-icon" />
			<h3 class="module-layout__header__title">{{ label }}</h3>
		</div>
		<canvas :id="`${label}-canvas`"></canvas>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Chart, registerables, ChartConfiguration } from "chart.js";

Chart.register(...registerables);

import Icon from "@/components/atoms/Icon.vue";

export default defineComponent({
	name: "Authentification",
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
			required: true,
		},
		customChartStyle: {
			type: Object,
			default: null,
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
		this.initChart();
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
			console.log(definitivChartConfig);
		},
		// @TODO fix types here
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getChartCustomStyle(ctx: HTMLCanvasElement): any {
			console.log(this.canvasDimensions);
			if (!this.customChartStyle) {
				return {};
			}
			const twoDimensionsCtx = ctx.getContext("2d");
			if (this.customChartStyle.linearGradient) {
				let linearGradient;
				if (twoDimensionsCtx) {
					linearGradient = twoDimensionsCtx.createLinearGradient(
						0,
						0,
						0,
						(twoDimensionsCtx.canvas.height * 10) / 2,
					);
					linearGradient.addColorStop(0, this.customChartStyle.linearGradient.firstColor);
					linearGradient.addColorStop(1, this.customChartStyle.linearGradient.secondColor);
				}
				return { backgroundColor: linearGradient };
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

	&__header {
		display: flex;
		align-items: center;

		&__icon {
			width: 24px;
			height: 24px;
			stroke: $white;
			margin-right: $xxs;
		}

		&__title {
			font-size: 16px;
		}
	}
}
</style>
