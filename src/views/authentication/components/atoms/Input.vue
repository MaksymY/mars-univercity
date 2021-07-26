<template>
	<div class="form">
		<label class="form__label">{{ label }}</label>
		<input
			:type="type"
			class="form__input"
			:placeholder="placeholder"
			:value="modelValue"
			@input="handleInput"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "Form",
	props: {
		label: {
			type: String,
			required: true,
			default: "",
		},
		modelValue: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			required: false,
			default: "text",
		},
		placeholder: {
			type: String,
			required: false,
			default: "",
		},
	},
	emits: ["update:modelValue"],
	methods: {
		handleInput(e: Event) {
			const { value } = e.target as HTMLTextAreaElement;
			this.$emit("update:modelValue", value);
		},
	},
});
</script>

<style lang="scss">
.form {
	display: flex;
	gap: 8px;
	flex-direction: column;
	&__label {
		color: white;
		text-align: left;
		font-size: 16px;
	}
	&__input {
		border-radius: 10px;
		padding: 18px;
		font-size: 14px;
		border: 2px solid $MaidiumGray;
	}
}
</style>
