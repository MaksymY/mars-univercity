<template>
	<div class="leftMap">
		<LeftRoom room="Salle Olympus" />
		<LeftRoom room="Salle Olympus" />
		<LeftRoom room="Salle Olympus" />
		<LeftRoom room="Salle Olympus" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftRoom from "../molecules/LeftRoom.vue";

export default defineComponent({
	name: "LeftMap",
	components: {
		LeftRoom,
	},
});
</script>

<style lang="scss">
.leftMap {
	display: flex;
	flex-direction: column;
}
</style>
