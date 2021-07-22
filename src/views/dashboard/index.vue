<template>
	<div class="dashboard">
		<ElectricityModule></ElectricityModule>
		<OccupancyRateModule></OccupancyRateModule>
	</div>
</template>

<script lang="js">
import { defineComponent } from "vue";

import OccupancyRate from "@/Utils/ChartsConfigs/OccupancyRate";

// Metrics modules imports
import ElectricityModule from "./components/organisms/modules/ElectricityModule.vue"
import OccupancyRateModule from "./components/organisms/modules/OccupancyRateModule.vue"


export default defineComponent({
	name: "Dashboard",
	components: {
		ElectricityModule,
		OccupancyRateModule,
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
