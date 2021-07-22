<template>
	<canvas id="donut-canvas" width="200" height="200"></canvas>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Chart, registerables, ChartConfiguration } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
	name: "Donut",
	props: {
		chartConfig: {
			type: Object as PropType<ChartConfiguration>,
			required: true,
		},
	},
	mounted() {
		new Chart(document.getElementById("donut-canvas") as HTMLCanvasElement, this.chartConfig);
	},
});
</script>
