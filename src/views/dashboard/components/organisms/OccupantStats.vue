<template>
	<div class="occupant">
		<span>{{ occupant.name }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "OccupantStats",
	props: {
		occupant: {
			type: Object,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.occupant {
	background-color: rgb(44, 20, 129);
	padding: 0.5rem;
}
</style>