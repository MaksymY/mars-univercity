<template>
	<button class="button" v-bind="$attrs">
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
	},
});
</script>

<style lang="scss">
.button {
	border-radius: 8px;
	padding: 8px 24px;
}
</style>
