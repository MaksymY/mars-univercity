<template>
	<section class="mainLayout">
		<nav class="mainLayout__nav">
			<BrandLogo />
			<div class="mainLayout__search">
				<button class="mainLayout__search-button" type="submit">
					<Icon class="mainLayout__search-icon" href="search" />
				</button>
				<input type="text" class="mainLayout__search-input" />
			</div>
			<Button class="mainLayout__button" text="Évènements" :reverse="true">
				<template #Icon>
					<Icon class="mainLayout__button-icon" href="event" />
				</template>
			</Button>
			<Button class="mainLayout__button" text="Déconnexion" :reverse="true">
				<template #Icon>
					<Icon class="mainLayout__button-icon" href="deconexion" />
				</template>
			</Button>
		</nav>
		<slot />
		<footer class="mainLayout__footer">
			<p class="mainLayout__footer-name">groupe 3</p>
			<p class="mainLayout__footer-year">2021</p>
		</footer>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BrandLogo from "@/components/atoms/BrandLogo.vue";
import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";

export default defineComponent({
	name: "MainLayout",
	components: {
		BrandLogo,
		Button,
		Icon,
	},
});
</script>

<style lang="scss">
.mainLayout {
	background-image: url("../assets/BG.png");
	display: grid;
	background-color: #05050f;
	background-origin: border-box;
	background-size: cover;
	grid-template-rows: auto 1fr auto;
	color: white;
	height: 100%;

	&__nav {
		display: grid;
		grid-template-columns: fit-content(100%) 1fr fit-content(100%) fit-content(100%);
		background-color: $BlackRussian;
		padding: 16px 48px;
		gap: 67px;
		align-items: center;
	}
	&__footer {
		font-size: 10px;
		display: flex;
		justify-content: space-between;
		background-color: $BlackRussian;
		padding: 16px 48px;
	}
	&__footer-name {
		margin: 0;
	}
	&__footer-year {
		margin: 0;
	}
	&__button {
		background: none;
		border: none;
		color: white;
		font-size: 16px;
	}
	&__button-icon {
		fill: white;
		width: 24px;
		height: 24px;
	}
	&__search {
		height: 32px;
		display: flex;
		position: relative;
	}
	&__search-button {
		background-color: $Black;
		border: none;
		border-radius: 8px 0px 0px 8px;
	}
	&__search-input {
		background-color: $Black;
		border-radius: 0px 8px 8px 0px;
		border: none;
		color: white;
		outline: none;
		width: 100%;
	}
	&__search-icon {
		fill: $LavederBlue;
		height: 16px;
		width: 16px;
	}
}
</style>
