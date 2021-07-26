<template>
	<section class="formular">
		<p class="formular__title">Connectez-vous</p>
		<Input
			class="formular__form"
			:model-value="signIn.email"
			label="E-MAIL"
			type="email"
			placeholder="exemple@mail.com"
			@update:modelValue="updateEmail"
		/>
		<Input
			class="formular__form"
			:model-value="signIn.password"
			label="MOT DE PASSE"
			type="password"
			placeholder="Plus de 6 charactères"
			@update:modelValue="updatePassword"
		/>
		<Button class="formular__button" text="Suivant" @click="submiteForm">
			<template #Icon>
				<Icon class="formular__button-icon" href="right-arrow" />
			</template>
		</Button>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { LoginUser } from "@/services/api";
import Input from "../atoms/Input.vue";
import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";

export default defineComponent({
	name: "Formular",
	components: {
		Input,
		Button,
		Icon,
	},
	setup() {
		const router = useRouter();
		const signIn = ref({
			email: "",
			password: "",
		});
		const updateEmail = (value: string) => (signIn.value.email = value);
		const updatePassword = (value: string) => (signIn.value.password = value);

		const submiteForm = async () => {
			try {
				await LoginUser(signIn.value.email, signIn.value.password);
				await router.push({ name: "Map" });
			} catch (e) {
				console.log(e);
			}
		};

		return {
			signIn,
			updateEmail,
			updatePassword,
			submiteForm,
		};
	},
});
</script>

<style lang="scss">
.formular {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	color: white;
	background-color: $BlackRussian;
	border-radius: 10px;
	padding: 80px;

	&__title {
		font-size: 32px;
		margin: 0;
	}

	&__form {
		align-self: center;
		margin-top: 32px;
		width: 100%;
	}

	&__button {
		display: flex;
		gap: 8px;
		background-color: $Ruby;
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.2);
		margin-top: 32px;
		padding: 8px 24px;
	}

	&__button-icon {
		fill: white;
		height: 24px;
		width: 24px;
	}
}
</style>
