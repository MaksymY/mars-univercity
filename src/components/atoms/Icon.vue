<template>
	<svg>
		<use :href="href.startsWith('#') ? href : `#${href}`" />
	</svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		href: {
			type: String,
			required: true,
		},
	},
});
</script>
