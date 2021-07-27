<template>
	<MiniRoomDataItem label="Luminosité" icon="oxygen-icon">
		<template #left-side-infos>
			<p class="luminosity__text">
				{{ dataSets[5]._value }} Lx
				<span class="luminosity__text__status">{{ GetLuminosityStatus }}</span>
			</p>
		</template>
		<template #content>
			<img class="image" :src="getImagePath" />
		</template>
	</MiniRoomDataItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MiniRoomDataItem from "../MiniRoomDataItem.vue";

export default defineComponent({
	name: "LuminosityModule",
	components: {
		MiniRoomDataItem,
	},
	props: {
		dataSets: {
			type: Object,
			required: true,
		},
	},
	computed: {
		GetLuminosityStatus() {
			const luminosityValue = this.dataSets[5].value;
			switch (true) {
				case luminosityValue < 50:
					return "Noir";
				case luminosityValue > 50 && luminosityValue < 100:
					return "Très-sombre";
				case luminosityValue > 100 && luminosityValue < 200:
					return "Sombre";
				case luminosityValue > 200 && luminosityValue < 1000:
					return "Moyen";
				case luminosityValue > 1000 && luminosityValue < 5000:
					return "Lumineux";
				case luminosityValue > 5000 && luminosityValue < 10000:
					return "Très-lumineux";
			}
			return "Moyen";
		},
		getImagePath() {
			return require(`@/assets/luminosity/img/${this.GetLuminosityStatus}.png`);
		},
	},
});
</script>

<style lang="scss">
.image {
	max-height: 100%;
}
</style>
