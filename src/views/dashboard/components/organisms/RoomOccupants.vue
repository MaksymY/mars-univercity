<template>
	<div class="occupants-layer">
		<p>Occupants de la salle</p>
		<div class="occupants-layer__table-header">
			<span occupants-layer__table-header__photo>Photo</span>
			<span occupants-layer__table-header__identity>Identité</span>
			<span occupants-layer__table-header__oxymetre>Oxymètre</span>
		</div>
		<OccupantStats v-for="occupant in occupants" :key="occupant.name" :occupant="occupant" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OccupantStats from "./OccupantStats.vue";

import { getRoomUsers } from "@/services/api";

export default defineComponent({
	name: "RoomOccupants",
	components: {
		OccupantStats,
	},
	data() {
		return {
			occupants: null,
		};
	},
	created() {
		this.getRoomOccupants();
	},
	methods: {
		async getRoomOccupants() {
			const roomOccupants = await getRoomUsers("60f92af2a684bb691c61cc0a");
			this.occupants = roomOccupants.usersWatchResult;
		},
	},
});
</script>

<style lang="scss" scoped>
.occupants-layer {
	background-color: $BlackRussian;
	color: $white;
	padding: 1rem;

	&__table-header {
		display: flex;

		span {
			display: block;

			&:first-child {
				margin-right: 1rem;
			}
			&:last-child {
				margin-left: auto;
			}
		}
	}
}
</style>
