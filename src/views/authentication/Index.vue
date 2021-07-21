<template>
	<div class="authentification">
		<Welcome />
		<Formular />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Welcome from "./organismes/Welcome.vue";
import Formular from "./organismes/Formular.vue";

export default defineComponent({
	name: "Authentification",
	components: {
		Welcome,
		Formular,
	},
});
</script>

<style lang="scss">
.authentification {
	padding: 48px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-image: url("./../../assets/BG.png");
	background-origin: border-box;
	background-size: cover;
	background-color: $Darkest;
}
</style>
