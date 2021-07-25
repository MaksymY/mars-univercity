<template>
	<div class="rightRoom">
		<Icon class="rightRoom__icon" href="right-room" />
		<p class="rightRoom__name">{{ room }}</p>
		<Door class="rightRoom__door" :status="open" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import Door from "../atoms/Door.vue";

export default defineComponent({
	name: "RightRoom",
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
.rightRoom {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 136px;
	width: 176px;
	border: 2px solid $LavederBlue;
	border-radius: 36px;
	background-color: $BlackRussian;
	position: relative;

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
		position: absolute;
		right: 0;
		height: 24px;
		transform: translateX(4px);
	}
}
</style>
