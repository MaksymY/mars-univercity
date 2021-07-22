<template>
	<div class="module-layout">
		<div class="module-layout__header">
			<Icon class="module-layout__header__icon" href="people-square-icon" />
			<h3 class="module-layout__header__title">{{ label }}</h3>
		</div>
		<canvas :id="`${label}-canvas`" width="200" height="200"></canvas>
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
	},
	mounted() {
		new Chart(
			document.getElementById(`${this.label}-canvas`) as HTMLCanvasElement,
			this.chartConfig,
		);
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
