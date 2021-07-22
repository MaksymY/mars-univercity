<template>
	<div class="map">
		<h1>MAP</h1>
		<Toggle text="test"></Toggle>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toggle from "@/components/atoms/Toggle.vue";

export default defineComponent({
	name: "Map",
	components: {
		Toggle,
	},
});
</script>

<style lang="scss"></style>
