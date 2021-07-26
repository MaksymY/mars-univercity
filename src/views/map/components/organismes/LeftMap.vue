<template>
	<div class="leftMap">
		<li v-for="room in leftRooms" :key="room._id" class="leftMap__item">
			<LeftRoom
				:select="room._id === selected && selectInfo"
				:room="room.label"
				:status="room.locked"
				@click="getTheRoom(room._id)"
			/>
		</li>
	</div>
</template>

<script lang="ts">
import { getRoomDetails } from "@/services/api";
import { defineComponent } from "vue";
import LeftRoom from "../molecules/LeftRoom.vue";

export default defineComponent({
	name: "LeftMap",
	components: {
		LeftRoom,
	},
	props: {
		leftRooms: {
			type: Object,
			required: false,
			default: Object,
		},
		selectInfo: {
			type: Boolean,
			required: false,
		},
	},
	emits: ["open-info"],
	data() {
		return {
			selected: null as any,
		};
	},
	methods: {
		async getTheRoom(id: string) {
			this.selected = id;
			const roomDetails = await getRoomDetails(id);
			this.$emit("open-info", roomDetails);
		},
	},
});
</script>

<style lang="scss">
.leftMap {
	display: flex;
	flex-direction: column;

	&__item {
		list-style: none;
	}
}
</style>
