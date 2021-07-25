<template>
	<button class="button" :class="{ 'button--reverse': reverse }" v-bind="$attrs">
		{{ text }}
		<slot name="Icon" />
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		text: {
			type: String,
			required: true,
			default: "",
		},
		reverse: {
			type: Boolean,
			required: false,
		},
	},
});
</script>

<style lang="scss">
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	padding: 0;
	gap: 8px;

	&--reverse {
		flex-direction: row-reverse;
	}
}
</style>
