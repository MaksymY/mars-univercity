<template>
	<section class="formular">
		<p>Connectez-vous</p>
		<p>Vous ne possédez pas de compte ?</p>
		<p>Inscrivez-vous</p>
		<Form class="formular__form" />
		<Form class="formular__form" />
		<Button class="formular__button" :text="'Suivant'">
			<template #Icon>
				<Icon class="formular__button-icon" href="right-arrow" />
			</template>
		</Button>
	</section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Form from "../atoms/Form.vue";
import Button from "../../../components/atoms/Button.vue";
import Icon from "../../../components/atoms/Icon.vue";

export default defineComponent({
	name: "Formular",
	components: {
		Form,
		Button,
		Icon,
	},
});
</script>
<style lang="scss">
.formular {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: white;
	background-color: $BlackRussian;
	border-radius: 10px;
	height: 100%;
	width: 100%;

	&__form {
		width: 60%;
		align-self: center;
	}

	&__button {
		background-color: $Ruby;
		color: white;
		align-items: center;
		justify-content: center;
		border: 2px solid rgba(255, 255, 255, 0.2);
		width: 20%;
		align-self: center;
	}

	&__button-icon {
		fill: white;
		height: 24px;
		width: 24px;
	}
}
</style>
