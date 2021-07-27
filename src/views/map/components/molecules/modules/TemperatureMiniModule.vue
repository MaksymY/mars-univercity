<template>
	<MiniRoomDataItem label="Temperature" icon="oxygen-icon">
		<template #left-side-infos>
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
			</div>
		</template>
	</MiniRoomDataItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MiniRoomDataItem from "../MiniRoomDataItem.vue";

export default defineComponent({
	name: "TemperatureModule",
	components: {
		MiniRoomDataItem,
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
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 20%;

	&__circle {
		border: 2px solid $white;
		border-radius: 50%;
		width: 70px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
		font-size: 12px;
	}

	&__slug {
		font-size: 12px;
		font-weight: bold;
	}
}
</style>
