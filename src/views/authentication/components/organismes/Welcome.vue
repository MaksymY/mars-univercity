<template>
	<div class="welcome">
		<BrandLogo :large="true" />
		<p class="welcome__title">Bienvenue à Mars UniverCity !</p>
		<p class="welcome__description">La première université intelligente de la planète rouge</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BrandLogo from "@/components/atoms/BrandLogo.vue";

export default defineComponent({
	name: "Welcome",
	components: {
		BrandLogo,
	},
});
</script>

<style lang="scss">
.welcome {
	color: white;
	align-self: center;
	justify-self: center;
	text-align: center;

	&__title {
		font-size: 20px;
	}

	&__description {
		font-size: 16px;
	}
}
</style>
