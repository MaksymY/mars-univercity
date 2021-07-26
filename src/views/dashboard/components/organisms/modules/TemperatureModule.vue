<template>
	<ModuleLayout label="Temperature" icon="oxygen-icon">
		<template #header-right-content></template>
		<template #content>
			<div class="temperature-layout">
				<div class="temperature-layout__circle">
					<span>{{ dataSets[dataSets.length - 1]._value }}°C</span>
				</div>
				<span class="temperature-layout__slug">{{ temperatureSlug }}</span>
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
	computed: {
		temperatureSlug() {
			const temp = this.dataSets[this.dataSets.length - 1]._value;
			switch (true) {
				case temp <= 10:
					return "Froid";
				case temp <= 15:
					return "Frais";
				case temp <= 20:
					return "Tempéré";
				case temp <= 25:
					return "Chaud";
				case temp <= 35:
					return "Très chaud";
				default:
					return "Tempéré";
			}
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
	flex-direction: column;

	&__circle {
		border: 2px solid $white;
		border-radius: 50%;
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}

	&__slug {
		font-size: 14px;
		font-weight: bold;
	}
}
</style>
