<template>
	<ModuleLayout label="Temperature" icon="oxygen-icon">
		<template #header-right-content>
			<span style="color: red">{{ dangerValueSlug }}</span>
		</template>
		<template #content>
			<div class="temperature-layout">
				<div
					class="temperature-layout__circle"
					:style="`color: ${temperatureStatus.color}; border-color: ${temperatureStatus.color}`"
				>
					<span>{{ dataSets[dataSets.length - 1]._value }}°C</span>
				</div>
				<span class="temperature-layout__slug" :style="`color: ${temperatureStatus.color}`">{{
					temperatureStatus.slug
				}}</span>
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
	data() {
		return {
			dangerValues: { min: 10, max: 35 },
		};
	},
	computed: {
		temperatureStatus() {
			const temp = this.dataSets[this.dataSets.length - 1]._value;
			switch (true) {
				case temp <= 10:
					return { color: "blue", slug: "Froid" };
				case temp <= 15:
					return { color: "white", slug: "Frais" };
				case temp <= 20:
					return { color: "white", slug: "Tempéré" };
				case temp <= 25:
					return { color: "white", slug: "Chaud" };
				case temp <= 35:
					return { color: "red", slug: "Très chaud" };
				default:
					return { color: "white", slug: "Tempéré" };
			}
		},
		dangerValueSlug() {
			const currentValue = this.dataSets[this.dataSets.length - 1]._value;
			if (currentValue <= this.dangerValues.min) {
				return "Trop basse";
			}
			if (currentValue >= this.dangerValues.max) {
				return "Trop élevée";
			}
			return "";
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
