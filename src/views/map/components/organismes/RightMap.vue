<template>
	<div class="rightMap">
		<RightRoom room="Salle Olympus" />
		<RightRoom room="Salle Olympus" />
		<RightRoom room="Salle Olympus" />
		<RightRoom room="Salle Olympus" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RightRoom from "../molecules/RightRoom.vue";

export default defineComponent({
	name: "RightMap",
	components: {
		RightRoom,
	},
});
</script>

<style lang="scss">
.rightMap {
	display: flex;
	flex-direction: column;
}
</style>
