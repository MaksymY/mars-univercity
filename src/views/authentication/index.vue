<template>
	<div class="authentification">
		<Welcome />
		<Form />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Welcome from "./components/organismes/Welcome.vue";
import Form from "./components/organismes/Form.vue";
export default defineComponent({
	name: "Authentification",
	components: {
		Welcome,
		Form,
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
