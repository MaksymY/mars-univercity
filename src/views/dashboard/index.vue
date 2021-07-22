<template>
	<div class="dashboard">
		<ModuleLayout>
			<ChartLayout :chart-config="occupancyRateChartConfig" />
		</ModuleLayout>
	</div>
</template>

<script lang="js">
import { defineComponent } from "vue";

import OccupancyRate from "@/Utils/ChartsConfigs/OccupancyRate";

import ModuleLayout from "./components/organisms/ModuleLayout.vue";
import ChartLayout from "./components/organisms/ChartLayout.vue";

export default defineComponent({
	name: "Dashboard",
	components: {
		ModuleLayout,
		ChartLayout,
	},
	data() {
		return {
			occupancyRateChartConfig: OccupancyRate,
		};
	},
});
</script>

<style lang="scss">
.test {
	height: 100px;
	width: 100px;
}
</style>
