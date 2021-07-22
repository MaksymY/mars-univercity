<template>
	<button class="button" :class="`button--${isActive ? toggleType : null}`" v-bind="$attrs">
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
			default: "",
		},
		isActive: {
			type: Boolean,
			required: true,
			default: false,
		},
		toggleType: {
			type: String as PropType<"normal" | "lock" | "unlock">,
			required: true,
			default: "normal",
		},
	},
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

	&--normal {
		border: 2px solid white;
		color: white;
	}

	&--lock {
		border: 2px solid $Ruby;
		color: $Ruby;
	}

	&--unlock {
		border: 2px solid $LightGreen;
		color: $LightGreen;
	}
}
</style>
