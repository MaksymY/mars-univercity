<template>
	<div class="centerMap">
		<div class="centerMap__top">
			<CenterRoom room="Salle Olympus" />
			<CenterRoom room="Salle Olympus" />
			<CenterRoom room="Salle Olympus" />
		</div>
		<div class="centerMap__middle">
			<CenterRoom class="centerMap__middle-professor" room="Salle prof" />
			<CenterRoom room="Salle Olympus" />
		</div>
		<CenterHallRoom room="Salle Olympus" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CenterRoom from "../molecules/CenterRoom.vue";
import CenterHallRoom from "../molecules/CenterHallRoom.vue";

export default defineComponent({
	name: "CenterMap",
	components: {
		CenterRoom,
		CenterHallRoom,
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
