<template>
	<section class="brand" :class="{ 'brand--large': large }">
		<Icon class="brand__icon" :class="{ 'brand__icon--large': large }" href="brand-icon" />
		<p class="brand__title" :class="{ 'brand__title--large': large }">MARS UNIVERCITY</p>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "./Icon.vue";

export default defineComponent({
	components: {
		Icon,
	},
	props: {
		large: {
			type: Boolean,
			required: false,
		},
	},
});
</script>

<style lang="scss">
.brand {
	display: flex;
	align-items: center;

	&__title {
		font-family: "Chillax-Regular", sans-serif;
		&--large {
			font-size: 40px;
		}
	}

	&__icon {
		width: 32px;
		height: 32px;
		&--large {
			width: 100px;
			height: 100px;
		}
	}

	&--large {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
