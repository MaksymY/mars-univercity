<template>
	<div class="centerHallRoom" :class="{ 'centerHallRoom--select': select }">
		<Icon class="centerHallRoom__icon" href="right-room" />
		<p class="centerHallRoom__name">{{ data.label }}</p>
		<Door class="centerHallRoom__backDoor" :status="data.locked" />
		<Door class="centerHallRoom__frontDoor" :status="data.locked" />
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
		data: {
			type: Object,
			required: true,
			default: Object,
		},
		select: {
			type: Boolean,
			rrequired: false,
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

	&--select {
		background-color: rgba(103, 118, 255, 0.74);
	}

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
