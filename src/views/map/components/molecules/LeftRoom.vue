<template>
	<div class="leftRoom">
		<Icon class="leftRoom__icon" href="right-room" />
		<p class="leftRoom__name">{{ room }}</p>
		<Door class="leftRoom__door" :status="open" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import Door from "../atoms/Door.vue";

export default defineComponent({
	name: "LeftRoom",
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
.leftRoom {
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
		left: 0;
		height: 24px;
		transform: translateX(-4px);
	}
}
</style>
