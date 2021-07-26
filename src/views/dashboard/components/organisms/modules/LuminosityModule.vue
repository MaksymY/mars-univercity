<template>
	<ModuleLayout label="Luminosité" icon="oxygen-icon">
		<template #content>
			<div class="luminosity">
				<img class="luminosity__image" :src="getImagePath" />
				<p class="luminosity__text">
					{{ dataSets[5]._value }} Lx
					<span class="luminosity__text__status">{{ GetLuminosityStatus }}</span>
				</p>
			</div>
		</template>
	</ModuleLayout>
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
			return require(`../luminosity/img/${this.GetLuminosityStatus}.png`);
		},
	},
});
</script>

<style lang="scss">
.luminosity {
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;

	&__image {
		max-width: 70%;
		max-height: 50%;
	}

	&__text {
		font-size: 14px;
		font-weight: bold;
		margin: 0;
		&__status {
			color: $LightBlue;
		}
	}
}
</style>
