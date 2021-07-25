<template>
	<ModuleLayout label="Temperature">
		<template #header-right-content></template>
		<template #content>
			<div class="temperature-layout">
				<div class="temperature-layout__circle">
					<span>{{ dataSets[dataSets.length - 1]._value }}°C</span>
				</div>
			</div>
		</template>
	</ModuleLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModuleLayout from "../ModuleLayout.vue";

export default defineComponent({
	name: "TemperatureModule",
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

<style lang="scss" scoped>
.temperature-layout {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	&__circle {
		border: 2px solid $white;
		border-radius: 50%;
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
