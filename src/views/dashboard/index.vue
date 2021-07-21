<template>
	<div class="dashboard">
		<ModuleLayout>
			<template #Content>
				<vue3-chart-js
					:id="doughnutChart.id"
					:type="doughnutChart.type"
					:data="doughnutChart.data"
					@before-render="beforeRenderLogic"
				></vue3-chart-js>
			</template>
		</ModuleLayout>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModuleLayout from "./organisms/ModuleLayout.vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default defineComponent({
	name: "Dashboard",
	components: {
		ModuleLayout,
		LineChart,
	},
	labels: ["Apples", "Bananas", "Grapes"],
	datasets: [
		{
			data: [20, 30, 50],
			backgroundColor: ["red", "yellow", "purple"],
		},
	],
	option: {
		title: {
			display: true,
			position: "bottom",
			text: "Fruits",
		},
	},
});
</script>

<style lang="scss">
.test {
	height: 100px;
	width: 100px;
}
</style>
