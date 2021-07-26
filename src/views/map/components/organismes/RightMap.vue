<template>
	<div class="rightMap">
		<li v-for="room in rightRooms" :key="room._id" class="rightMap__item">
			<RightRoom
				:select="room._id === selected && selectInfo"
				:room="room.label"
				:status="room.locked"
				@click="getTheRoom(room._id)"
			/>
		</li>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getRoomDetails } from "@/services/api";
import RightRoom from "../molecules/RightRoom.vue";

export default defineComponent({
	name: "RightMap",
	components: {
		RightRoom,
	},
	props: {
		rightRooms: {
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
.rightMap {
	display: flex;
	flex-direction: column;

	&__item {
		list-style: none;
	}
}
</style>
