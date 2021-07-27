<template>
	<div class="centerMap">
		<div class="centerMap__top">
			<CenterRoom
				:select="selectInfo ? getKeyByValue('Toilette H')._id === selectInfo._id : false"
				:data="getKeyByValue('Toilette H')"
				@click="getTheRoom(getKeyByValue('Toilette H')._id)"
			/>
			<CenterRoom
				:select="selectInfo ? getKeyByValue('Infirmerie')._id === selectInfo._id : false"
				:data="getKeyByValue('Infirmerie')"
				@click="getTheRoom(getKeyByValue('Infirmerie')._id)"
			/>
			<CenterRoom
				:select="selectInfo ? getKeyByValue('Toilette F')._id === selectInfo._id : false"
				:data="getKeyByValue('Toilette F')"
				@click="getTheRoom(getKeyByValue('Toilette F')._id)"
			/>
		</div>
		<div class="centerMap__middle">
			<CenterRoom
				class="centerMap__middle-professor"
				:select="selectInfo ? getKeyByValue('Salle des Profs')._id === selectInfo._id : false"
				:data="getKeyByValue('Salle des Profs')"
				@click="getTheRoom(getKeyByValue('Salle des Profs')._id)"
			/>
			<CenterRoom
				:select="selectInfo ? getKeyByValue('Administration')._id === selectInfo._id : false"
				:data="getKeyByValue('Administration')"
				@click="getTheRoom(getKeyByValue('Administration')._id)"
			/>
		</div>
		<CenterHallRoom
			:select="selectInfo ? getKeyByValue('Hall')._id === selectInfo._id : false"
			:data="getKeyByValue('Hall')"
			@click="getTheRoom(getKeyByValue('Hall')._id)"
		/>
	</div>
</template>

<script lang="ts">
import { getRoomDetails } from "@/services/api";
import { defineComponent } from "vue";
import CenterRoom from "../molecules/CenterRoom.vue";
import CenterHallRoom from "../molecules/CenterHallRoom.vue";

export default defineComponent({
	name: "CenterMap",
	components: {
		CenterRoom,
		CenterHallRoom,
	},
	props: {
		centerRooms: {
			type: Object,
			required: false,
			default: Object,
		},
		selectInfo: {
			type: Object,
			required: false,
			default: Object,
		},
	},
	emits: ["open-info"],
	methods: {
		getKeyByValue(value: string) {
			return this.centerRooms?.find((el: any) => el.label === value);
		},
		async getTheRoom(id: string) {
			const roomDetails = await getRoomDetails(id);
			this.$emit("open-info", roomDetails);
		},
	},
});
</script>

<style lang="scss">
.centerMap {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 44px;
	&__top {
		display: flex;
		width: 100%;
	}
	&__middle {
		display: flex;
		width: 100%;
	}

	&__middle-professor {
		width: 100%;
	}
}
</style>
