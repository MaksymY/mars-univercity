<template>
	<button class="button">
		<slot />
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.button {
	border-radius: 8px;
	color: $red;
}
</style>
