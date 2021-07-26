<template>
	<div v-if="roomSensorsData" class="dashboard">
		<div class="dashboard__datas">
			<router-link class="dashboard__datas__back-link" to="/"
				>&#129044; Retour à la carte</router-link
			>
			<div></div>
			<h1>Le nom de la salle</h1>
			<div class="dashboard__datas__charts">
				<OccupancyRateModule class="dashboard__datas__charts__occupancy"></OccupancyRateModule>
				<ElectricityModule
					class="dashboard__datas__charts__electricity"
					:data-sets="roomSensorsData.Watts"
				></ElectricityModule>
				<OxygenModule
					class="dashboard__datas__charts__oxygen"
					:data-sets="roomSensorsData.Oxygen"
				></OxygenModule>
				<TemperatureModule
					class="dashboard__datas__charts__temperature"
					:data-sets="roomSensorsData.Temperature"
				></TemperatureModule>
				<LuminosityModule
					class="dashboard__datas__charts__luminosity"
					:data-sets="roomSensorsData.Luminosity"
				></LuminosityModule>
			</div>
		</div>
		<RoomOccupants class="dashboard__room-occupants"></RoomOccupants>
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

import RoomOccupants from "./components/organisms/RoomOccupants.vue"

import { getRoomSensorsData } from "@/services/api";

export default defineComponent({
	name: "Dashboard",
	components: {
		ElectricityModule,
		OccupancyRateModule,
		OxygenModule,
		LuminosityModule,
		TemperatureModule,
		RoomOccupants
	},
	data() {
		return {
			roomSensorsData: null
		};
	},
	mounted() {
		this.getRoomSensorsData();
	},
	methods: {
		async getRoomSensorsData() {
			const data = await getRoomSensorsData("951951");
			const dataMappedByMeasurement = {}
			for (const sensorData of data.roomData) {
				if (sensorData._measurement in dataMappedByMeasurement) {
					dataMappedByMeasurement[sensorData._measurement].push(sensorData)
				}
				else dataMappedByMeasurement[sensorData._measurement] = [sensorData]
			}
			this.roomSensorsData =  dataMappedByMeasurement

		},
	}
});
</script>

<style lang="scss">
.dashboard {
	display: flex;
	background-image: url("./../../assets/background-with-cross.jpg");
	color: $white;

	&__datas {
		padding: 1rem;
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		&__back-link {
			color: $white;
			text-decoration: none;

			&:hover {
				font-weight: bold;
			}
		}

		&__charts {
			height: 80%;
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
	}

	&__room-occupants {
		width: 30%;
	}
}
</style>
