<template>
	<div class="centerRoom" :class="{ 'centerRoom--select': select }">
		<Icon class="centerRoom__icon" href="right-room" />
		<p class="centerRoom__name">{{ data.label }}</p>
		<Door class="centerRoom__door" :status="data.locked" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import Door from "../atoms/Door.vue";

export default defineComponent({
	name: "CenterRoom",
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
.centerRoom {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 185px;
	width: 100%;
	border: 2px solid $LavederBlue;
	border-radius: 36px;
	background-color: $BlackRussian;
	position: relative;

	&--select {
		background-color: rgba(103, 118, 255, 0.74);
	}

	&__name {
		color: $LavederBlue;
		font-size: 14px;
	}

	&__icon {
		position: absolute;
		width: 135px;
		height: 78px;
	}

	&__door {
		transform: translateY(4px);
		position: absolute;
		bottom: 0;
		width: 28px;
	}
}
</style>
