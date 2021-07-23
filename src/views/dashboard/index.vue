<template>
	<div class="dashboard">
		<div class="dashboard__datas">
			<OccupancyRateModule class="dashboard__datas__occupancy"></OccupancyRateModule>
			<ElectricityModule class="dashboard__datas__electricity"></ElectricityModule>
			<OxygenModule class="dashboard__datas__oxygen"></OxygenModule>
			<TemperatureModule class="dashboard__datas__temperature"></TemperatureModule>
			<LuminosityModule class="dashboard__datas__luminosity"></LuminosityModule>
		</div>
		<RoomOccupants class="dashboard__room-occupants"></RoomOccupants>
		<!-- <ElectricityModule></ElectricityModule> -->
		<OccupancyRateModule></OccupancyRateModule>
	</div>
</template>

<script lang="js">
import { defineComponent } from "vue";

import OccupancyRate from "@/Utils/ChartsConfigs/OccupancyRate";

// Metrics modules imports
// import ElectricityModule from "./components/organisms/modules/ElectricityModule.vue"
import OccupancyRateModule from "./components/organisms/modules/OccupancyRateModule.vue"
import OxygenModule from "./components/organisms/modules/OxygenModule.vue"
import LuminosityModule from "./components/organisms/modules/LuminosityModule.vue"
import TemperatureModule from "./components/organisms/modules/TemperatureModule.vue"

import RoomOccupants from "./components/organisms/RoomOccupants.vue"

export default defineComponent({
	name: "Dashboard",
	components: {
		// ElectricityModule,
		OccupancyRateModule,
		OxygenModule,
		LuminosityModule,
		TemperatureModule,
		RoomOccupants
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
	display: flex;

	&__datas {
		padding: 1rem;
		height: 70%;
		width: 70%;
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

	&__room-occupants {
		width: 30%;
	}
}
</style>
