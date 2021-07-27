<template>
	<div v-if="occupants" class="occupants-layer">
		<p>Occupants de la salle {{ occupants.length }}</p>
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
			occupantsReloader: null as any,
		};
	},
	computed: {
		roomId(): string {
			return this.$route.params.roomId as string;
		},
	},
	mounted() {
		this.getRoomOccupants();
		this.occupantsReloader = setInterval(() => {
			this.getRoomOccupants();
		}, 15000);
	},
	beforeUnmount: function () {
		if (this.occupantsReloader) {
			clearInterval(this.occupantsReloader);
		}
	},
	methods: {
		async getRoomOccupants() {
			const roomOccupants = await getRoomUsers(this.roomId);
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
	border-top: 2px solid black;
	border-bottom: 1px solid black;

	p {
		text-align: center;
		font-size: 20px;
	}

	&__table-header {
		display: flex;
		font-size: 16px;
		margin-bottom: 1rem;

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

	&::v-deep {
		.occupant:nth-child(odd) {
			background-color: #17173e;
		}
	}
}
</style>
