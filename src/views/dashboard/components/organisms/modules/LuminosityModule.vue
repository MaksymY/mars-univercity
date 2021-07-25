<template>
	<ModuleLayout label="Luminosité" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModuleLayout from "../ModuleLayout.vue";

export default defineComponent({
	name: "LuminosityModule",
	components: {
		ModuleLayout,
	},
	props: {
		dataSets: {
			type: Object,
			required: true,
		},
	},
});
</script>
