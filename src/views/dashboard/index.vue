<template>
	<div class="dashboard">
		<ModuleLayout>
			<template #Content>
				<line-chart class="test" :chart-data="datacollection"></line-chart>
			</template>
		</ModuleLayout>
	</div>
</template>

<script lang="js">
import { defineComponent } from "vue";

import ModuleLayout from "./components/organisms/ModuleLayout.vue";
import LineChart from "./Line.vue"

export default defineComponent({
	name: "Dashboard",
	components: {
		ModuleLayout,
		LineChart
	},
	data() {
		return {
			datacollection: null,
		};
	},
	mounted() {
		this.fillData();
	},
	methods: {
		fillData() {
			this.datacollection = {
				labels: [this.getRandomInt(), this.getRandomInt()],
				datasets: [
					{
						label: "Data One",
						backgroundColor: "#f87979",
						data: [this.getRandomInt(), this.getRandomInt()],
					},
					{
						label: "Data One",
						backgroundColor: "#f87979",
						data: [this.getRandomInt(), this.getRandomInt()],
					},
				],
			};
		},
		getRandomInt() {
			return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
		},
	},
});
</script>

<style lang="scss">
.test {
	height: 100px;
	width: 100px;
}
</style>
