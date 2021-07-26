<template>
	<div v-if="roomDetails" class="dashboard">
		<div class="dashboard__datas">
			<router-link class="dashboard__datas__back-link" to="/">
				<img src="@/assets/arrow-left.svg" alt="back-arrow" />
				Retour à la carte
			</router-link>
			<img
				class="dashboard__datas__illustration"
				:src="roomDetails.img_url"
				alt="Image de la salle"
			/>
			<h1 class="dashboard__datas__title">{{ roomDetails.label }}</h1>
			<div v-if="roomSensorsData" class="dashboard__datas__charts">
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

// Metrics modules imports
import ElectricityModule from "./components/organisms/modules/ElectricityModule.vue"
import OccupancyRateModule from "./components/organisms/modules/OccupancyRateModule.vue"
import OxygenModule from "./components/organisms/modules/OxygenModule.vue"
import LuminosityModule from "./components/organisms/modules/LuminosityModule.vue"
import TemperatureModule from "./components/organisms/modules/TemperatureModule.vue"

import RoomOccupants from "./components/organisms/RoomOccupants.vue"

import { getRoomSensorsData, getRoomDetails } from "@/services/api";



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
			roomSensorsData: null,
			roomDetails: null,
		};
	},
	computed: {
		roomId() {
			return this.$route.params.roomId
		}
	},
	async mounted() {
		await this.getRoomData()
		this.getRoomSensorsData(this.roomDetails.node_id);
		setInterval(() => {
			this.getRoomSensorsData(this.roomDetails.node_id);
		}, 60000 * 15);
	},
	methods: {
		async getRoomData() {
			const data = await getRoomDetails(this.roomId)
			this.roomDetails = data.room
		},
		async getRoomSensorsData(nodeId) {
			const data = await getRoomSensorsData(nodeId);
			const dataMappedByMeasurement = {}
			for (const sensorData of data.roomData) {
				if (sensorData._measurement in dataMappedByMeasurement) {
					dataMappedByMeasurement[sensorData._measurement].unshift(sensorData)
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
		justify-content: space-between;

		&__back-link {
			color: $white;
			text-decoration: none;
			display: flex;
			align-items: center;
			font-size: 16px;

			img {
				margin-right: 0.5rem;
			}

			// &:hover {
			// font-weight: bold;
			// }
		}

		&__illustration {
			align-self: center;
		}

		&__title {
			text-align: center;
			font-size: 24px;
			font-weight: normal;
			text-transform: uppercase;
		}

		&__charts {
			height: 70%;
			display: grid;
			grid-template:
				"a a b b b b" 15%
				"a a c c d d" 40%
				"e e e f f f" 42% / 1fr 1fr 1fr 1fr 1fr 1fr;

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
