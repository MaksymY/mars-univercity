<template>
	<button
		class="button"
		:class="`button--${isActive ? activeColor : null}`"
		v-bind="$attrs"
		@click="$emit('toggle-clicked')"
	>
		{{ text }}
	</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Toggle",
	props: {
		text: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			required: true,
		},
		activeColor: {
			type: String as PropType<"white" | "green" | "red">,
			required: true,
		},
	},
	emits: ["toggle-clicked"],
});
</script>

<style lang="scss">
.button {
	border-radius: 8px;
	padding: 10px 27px;
	background-color: $LightBlue;
	color: $LighterBlue;
	font-size: 14px;
	border: 2px solid $LightBlue;
	cursor: pointer;

	&--white {
		border: 2px solid white;
		color: white;
	}

	&--red {
		border: 2px solid $Ruby;
		color: $Ruby;
	}

	&--green {
		border: 2px solid $LightGreen;
		color: $LightGreen;
	}
}
</style>
