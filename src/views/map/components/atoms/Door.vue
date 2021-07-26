<template>
	<div class="door" :class="`door--${status ? 'close' : 'open'}`"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Door",
	props: {
		status: {
			type: Boolean,
			required: true,
		},
	},
});
</script>

<style lang="scss">
.door {
	height: 1px;
	border: 3px solid $Green;
	border-radius: 4px;
	background-color: white;

	&--open {
		border: 3px solid $Green;
	}

	&--close {
		border: 3px solid $Red;
	}
}
</style>
