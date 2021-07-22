<template>
	<div class="dashboard">
		<OccupancyRateModule class="dashboard__occupancy"></OccupancyRateModule>
		<ElectricityModule class="dashboard__electricity"></ElectricityModule>
		<OxygenModule class="dashboard__oxygen"></OxygenModule>
		<TemperatureModule class="dashboard__temperature"></TemperatureModule>
		<LuminosityModule class="dashboard__luminosity"></LuminosityModule>
	</div>
</template>

<script lang="js">
import { defineComponent } from "vue";

import OccupancyRate from "@/Utils/ChartsConfigs/OccupancyRate";

// Metrics modules imports
import ElectricityModule from "./components/organisms/modules/ElectricityModule.vue"
import OccupancyRateModule from "./components/organisms/modules/OccupancyRateModule.vue"
import OxygenModule from "./components/organisms/modules/OxygenModule.vue"
import LuminosityModule from "./components/organisms/modules/LuminosityModule.vue"
import TemperatureModule from "./components/organisms/modules/TemperatureModule.vue"


export default defineComponent({
	name: "Dashboard",
	components: {
		ElectricityModule,
		OccupancyRateModule,
		OxygenModule,
		LuminosityModule,
		TemperatureModule
	},
	data() {
		return {
			occupancyRateChartConfig: OccupancyRate,
		};
	},
});
</script>

<style lang="scss">
.dashboard {
	display: grid;
	grid-template:
		"a a b b b b" 10%
		"a a c c d d" 46%
		"e e e f f f" 36% / 1fr 1fr 1fr 1fr 1fr 1fr;

	grid-gap: 2%;

	&__occupancy {
		grid-area: a;
	}
	&__electricity {
		grid-area: e;
	}
	&__oxygen {
		grid-area: f;
	}
	&__temperature {
		grid-area: d;
	}
	&__luminosity {
		grid-area: c;
	}
}
</style>
