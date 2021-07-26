<template>
	<div class="centerRoom">
		<Icon class="centerRoom__icon" href="right-room" />
		<p class="centerRoom__name">{{ room }}</p>
		<Door class="centerRoom__door" :status="open" />
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
		room: {
			type: String,
			required: true,
			default: "",
		},
		status: {
			type: Boolean,
			required: true,
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
