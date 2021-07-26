<template>
	<div class="centerHallRoom">
		<Icon class="centerHallRoom__icon" href="right-room" />
		<p class="centerHallRoom__name">{{ room }}</p>
		<Door class="centerHallRoom__backDoor" :status="open" />
		<Door class="centerHallRoom__frontDoor" :status="open" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import Door from "../atoms/Door.vue";

export default defineComponent({
	name: "CenterHallRoom",
	components: {
		Icon,
		Door,
	},
	props: {
		room: {
			type: String,
			required: true,
			default: "",
		},
	},
});
</script>

<style lang="scss">
.centerHallRoom {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 145px;
	width: 100%;
	border: 2px solid $LavederBlue;
	border-radius: 36px;
	background-color: $BlackRussian;
	position: relative;

	&__backDoor {
		transform: translateY(-4px);
		position: absolute;
		width: 61px;
		top: 0;
	}

	&__frontDoor {
		width: 100px;
		position: absolute;
		bottom: 0;
		transform: translateY(4px);
	}

	&__name {
		color: $LavederBlue;
		font-size: 14px;
	}

	&__icon {
		position: absolute;
		width: 185px;
		height: 78px;
	}
}
</style>
