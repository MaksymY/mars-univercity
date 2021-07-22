<template>
	<div class="moduleLayout">
		<div class="titleContent">
			<Icon class="peopleIcon" href="people-square-icon" />
			<p class="module__title">Taux d’occupation</p>
		</div>
		<slot name="Content" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Icon from "@/components/atoms/Icon.vue";

export default defineComponent({
	name: "Authentification",
	components: {
		Icon,
	},
});
</script>

<style lang="scss">
.moduleLayout {
	background-color: $BlackRussian;
	color: white;
	padding: $m;
}

.peopleIcon {
	width: 24px;
	height: 24px;
	stroke: $white;
	margin-right: $xxs;
}

.titleContent {
	display: flex;
	align-items: center;
}

.module__title {
	font-size: 16px;
}
</style>
