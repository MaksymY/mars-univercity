<template>
	<div class="occupants-layer">
		<p>Occupants de la salle</p>
		<OccupantStats v-for="occupant in occupantsInRoom" :key="occupant.name" :occupant="occupant" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OccupantStats from "./OccupantStats.vue";

export default defineComponent({
	name: "RoomOccupants",
	components: {
		OccupantStats,
	},
	computed: {
		occupantsInRoom(): any {
			//- This computed must be a prop
			return [
				{ name: "Maksym", oxymetreStats: "..." },
				{ name: "Hugues", oxymetreStats: "..." },
				{ name: "Louis", oxymetreStats: "..." },
			];
		},
	},
});
</script>

<style lang="scss" scoped>
.occupants-layer {
	background-color: $BlackRussian;
	color: $white;
	padding: 1rem;
}
</style>
