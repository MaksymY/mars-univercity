<template>
	<ModuleLayout label="Taux d'occupation" icon="oxygen-icon">
		<template #content>
			<div class="occurancy">
				<div class="donut">
					<div class="donut-chart chart">
						<div class="dunutGraph">
							<p class="dunutGraphtext">{{ calcPercentage }}%</p>
							<figure class="dunutGraphgraph">
								<svg width="100%" height="100%" viewBox="0 0 42 42" class="dunutGraph__graph-donut">
									<circle class="dunutGraphgraph-donut-segment" cx="21" cy="21" r="16"></circle>
									<circle
										class="dunutGraph__graph-donut-ring"
										:style="{ strokeDashoffset: calcPercentage - 101 }"
										cx="21"
										cy="21"
										r="16"
									></circle>
								</svg>
							</figure>
						</div>
					</div>
					<p>{{ occupancyData.actual_users.length }}/{{ occupancyData.capacity }} pers.</p>
				</div>
				<div class="occurence__handler">
					<p>nombre de personne max.</p>
					<p>{{ occupancyData.capacity }}</p>
					<div class="occurence_buttons">
						<button class="occurence__button" @click="changeCapacityOccurancy('10')">-</button>
						<button class="occurence__button">+</button>
					</div>
				</div>
			</div>
		</template>
	</ModuleLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModuleLayout from "../ModuleLayout.vue";
import { updateRoomCapacity } from "@/services/api";

export default defineComponent({
	name: "OccupancyRateModule",
	components: {
		ModuleLayout,
	},
	props: {
		dataSets: {
			type: Object,
			required: true,
		},
		occupancyData: {
			type: Object,
			required: true,
		},
	},
	emits: ["capacity-changed"],
	data: function () {
		return {
			timeOutRef: null as any,
			newValue: null as any,
			styleObject: {
				color: "red",
				fontSize: "13px",
			},
		};
	},
	computed: {
		calcPercentage(): number {
			return (this.occupancyData.actual_users.length / this.occupancyData.capacity) * 100;
		},
	},
	methods: {
		async changeCapacityOccurancy(capacity: string) {
			await updateRoomCapacity(this.occupancyData._id, capacity);
			this.$emit("capacity-changed");
		},
		debounce() {
			let value = parseInt(this.occupancyData.capacity);
			this.newValue = value++;
			if (this.timeOutRef !== null) {
				clearTimeout(this.timeOutRef);
			}
		},
	},
});
</script>

<style lang="scss">
.occurancy {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.occurence_buttons {
	margin-top: $xs;
}

.occurence__handler {
	display: flex;
	align-content: center;
	justify-content: space-between;
	width: 100%;
}

.occurence__button {
	border-radius: 8px;
	background-color: $LightBlue;
	color: $LighterBlue;
	font-size: 14px;
	border: 2px solid $LightBlue;
	width: 50px;
	height: 50px;
	&:hover {
		border: 2px solid white;
		color: white;
		cursor: pointer;
	}
}

.dunutGraphtext {
	position: absolute;
	transform: translateY(36px) translateX(85px);
	color: $purple;
}

.donut {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.dunutGraph {
	text-align: center;
	width: 35%;
	position: relative;
	&__text {
		font-size: 1.4em;
		color: red;
		top: 0;
		bottom: 0;
		position: absolute;
	}

	&__graph-donut {
		width: 6em;
		fill: none;
		position: relative;
	}
	&__graph-donut-ring {
		fill: transparent;
		stroke: $purple;
		stroke-width: 3;
		stroke-dasharray: 101;
		stroke-dashoffset: 101;
		transform-origin: center center;
		transform: rotate(-90deg);
		transition: linear 1s;
		stroke-linecap: butt;
	}

	&__graph-donut-segment {
		fill: transparent;
		stroke: #ababab;
		stroke-width: 3;
	}
}

.module-layout {
	background-color: $BlackRussian;
	color: white;
	padding: $m;

	&__header {
		display: flex;
		align-items: center;

		&__icon {
			width: 24px;
			height: 24px;
			stroke: $white;
			margin-right: $xxs;
		}

		&__title {
			font-size: 16px;
		}
	}
}

.donut-chart {
	position: relative;
	border-radius: 50%;
	overflow: hidden;

	.slice {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.chart-center {
		position: absolute;
		border-radius: 50%;

		span {
			display: block;
			text-align: center;
		}
	}
}
</style>
