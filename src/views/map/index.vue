<template>
	<div class="map">
		<MainLayout>
			<div class="map__wrapper">
				<div class="map__rock"></div>
				<div class="map__main">
					<LeftMap
						:select-info="roomInfo"
						:left-rooms="roomLeft"
						class="map__main-left"
						@open-info="openInfo"
					/>
					<CenterMap
						:select-info="roomInfo"
						:center-rooms="roomCenter"
						class="map__main-center"
						@open-info="openInfo"
					/>
					<RightMap
						:select-info="roomInfo"
						:right-rooms="roomRight"
						class="map__main-right"
						@open-info="openInfo"
					/>
				</div>
				<div v-if="roomInfo" class="map__infos">
					<Icon class="map__infos-close" href="cross" @click="roomInfo = null" />
					<img class="map__infos-img" :src="roomInfo.img_url" />
					<p class="map__infos-title">{{ roomInfo.label }}</p>
					<p
						class="map__status"
						:class="roomInfo.locked ? 'map__status--close' : 'map__status--open'"
					>
						{{ roomInfo.locked ? "Vérouillé" : "Déverouillée" }}
					</p>
					<Button class="map__button" :text="'Configurer'" @click="goToRoom" />
				</div>
			</div>
		</MainLayout>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getRooms } from "@/services/api";
import { Rooms } from "@/services/types/map";
import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";
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
		Button,
		Icon,
	},
	data() {
		return {
			roomInfo: null as any,
			rooms: null,
			roomLeft: null,
			roomRight: null,
			roomCenter: null,
		};
	},
	async mounted() {
		await this.getRoomData();
	},
	methods: {
		getRoomData() {
			getRooms().then((data) => {
				this.rooms = data.roomMap;
				this.roomLeft = data.roomMap.filter((r: any) =>
					["Salle Olympus", "Salle Matara", "Salle Elysium", "Salle Syrtis Major"].includes(
						r.label,
					),
				);
				this.roomRight = data.roomMap.filter((r: any) =>
					[
						"Salle Amazonis Planitia",
						"Salle Noachis Terra",
						"Salle Mansae",
						"Salle Aoelis",
					].includes(r.label),
				);
				this.roomCenter = data.roomMap.filter((r: any) =>
					[
						"Toilette H",
						"Hall",
						"Toilette F",
						"Salle Elysium",
						"Infirmerie",
						"Administration",
						"Salle des Profs",
					].includes(r.label),
				);
			});
		},
		openInfo(value: any) {
			this.roomInfo = value.room;
		},
		goToRoom() {
			this.$router.push({ name: "Dashboard", params: { roomId: this.roomInfo._id } });
		},
	},
});
</script>

<style lang="scss">
.map {
	height: 100vh;

	&__wrapper {
		align-self: center;
		display: flex;
		justify-content: center;
		gap: 40px;
		height: 100%;
		align-items: center;
		position: relative;
	}
	&__rock {
		position: absolute;
		z-index: 0;
		height: 100%;
		width: 100%;
		background-image: url("./../../assets/map-rock.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}

	&__main {
		position: relative;
		z-index: 1;
		display: grid;
		justify-content: center;
		grid-template-columns: 176px 353px 176px;
		grid-template-areas: "right center left";
		gap: 39px;
		background: url("./../../assets/Couloirs.png");
		background-origin: border-box;
		background-size: cover;
		background-repeat: round;
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
	&__infos {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background-color: $Pau;
		border-radius: 10px;
		width: 300px;
		height: 100%;
		z-index: 1;
	}
	&__infos-close {
		width: 16px;
		height: 16px;
		margin: 24px 24px 0 auto;
	}
	&__infos-title {
		margin: 16px 0 0 0;
	}
	&__infos-img {
		height: 64px;
		width: 64px;
	}
	&__status {
		font-size: 14px;
		margin: 8px 0 0 0;
		&--open {
			color: $Green;
		}
		&--close {
			color: $Red;
		}
	}
	&__button {
		background-color: $Ruby;
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.2);
		margin-top: 32px;
		padding: 8px 24px;
		font-size: 14px;
	}
}
</style>
