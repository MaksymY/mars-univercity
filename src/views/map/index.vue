<template>
	<div class="map">
		<MainLayout>
			<div class="map__wrapper">
				<div class="map__main">
					<LeftMap class="map__main-left" />
					<CenterMap class="map__main-center" />
					<RightMap class="map__main-right" />
				</div>
			</div>
		</MainLayout>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
/* import { getRooms } from "@/services/api"; */
import MainLayout from "@/layouts/MainLayout.vue";
import RightMap from "./components/organismes/RightMap.vue";
import LeftMap from "./components/organismes/LeftMap.vue";
import CenterMap from "./components/organismes/CenterMap.vue";

export default defineComponent({
	name: "Map",
	components: {
		MainLayout,
		RightMap,
		LeftMap,
		CenterMap,
	},
	/* async setup() {
		const Rooms = await getRooms();

		return {
			Rooms,
		};
	}, */
});
</script>

<style lang="scss">
.map {
	height: 100vh;

	&__wrapper {
		align-self: center;
	}

	&__main {
		display: grid;
		justify-content: center;
		grid-template-columns: 176px 353px 176px;
		grid-template-areas: "right center left";
		gap: 39px;
	}

	&__main-right {
		grid-area: right;
	}
	&__main-center {
		grid-area: center;
		justify-self: center;
		align-self: center;
	}
	&__main-left {
		grid-area: left;
	}
	&__center-top {
		display: flex;
	}
	&__center-midle {
		display: flex;
	}
}
</style>
