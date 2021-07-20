<template>
	<TheIconsSet />
	<router-view class="main" />
</template>

<script lang="ts">
import TheIconsSet from "@/components/atoms/TheIconsSet.vue";

export default {
	components: {
		TheIconsSet,
	},
};
</script>

<!-- eslint-disable max-len -->
<style lang="scss">
@include font-face("./assets/fonts/Satoshi/", "Satoshi-Regular", otf, "Satoshi-Regular");
@include font-face("./assets/fonts/Satoshi/", "Satoshi-Bold", otf, "Satoshi-Bold", bold);
@include font-face("./assets/fonts/Chillax/", "Chillax-Regular", otf, "Chillax-Regular");
@include font-face("./assets/fonts/Chillax/", "Chillax-Bold", otf, "Chillax-Bold", bold);

html,
body,
#app {
	font-size: 24px;
	height: 100%;
	font-family: "Satoshi-Regular", sans-serif;
	box-sizing: border-box;
}

.main {
	height: 100vh;
	box-sizing: border-box;
}
</style>
