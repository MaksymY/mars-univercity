<template>
	<MiniRoomDataItem label="Taux d'occupation" icon="oxygen-icon">
		<template #left-side-infos>
			<p class="occupancy-rate">
				{{ occupancyData.actual_users.length }}/{{ occupancyData.capacity }} pers.
			</p>
		</template>
		<template #content>
			<div class="occupancy">
				<div class="donut">
					<p class="donut__percentage">{{ calcPercentage }}%</p>
					<svg width="100%" height="100%" viewBox="0 0 42 42" class="donut__graph">
						<circle
							class="dunutGraph__graph-donut-ring"
							:style="{ strokeDashoffset: calcPercentage - 101 }"
							cx="21"
							cy="21"
							r="16"
						></circle>
					</svg>
				</div>
			</div>
		</template>
	</MiniRoomDataItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MiniRoomDataItem from "../MiniRoomDataItem.vue";

export default defineComponent({
	name: "OccupancyRateModule",
	components: {
		MiniRoomDataItem,
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
			styleObject: {
				color: "red",
				fontSize: "13px",
			},
			timeOutRef: null as any,
			initialValue: 40 as any,
			newValue: null as any,
		};
	},
	computed: {
		calcPercentage(): number {
			return Math.round(
				(this.occupancyData.actual_users.length / this.occupancyData.capacity) * 100,
			);
		},
	},
});
</script>

<style lang="scss">
.occupancy {
	width: 30%;
	// display: flex;
	// justify-content: space-between;
	// max-height: 80%;
	// position: relative;
	// flex: 1;
}

.occupancy_buttons {
	margin-top: $xs;
}

.occupancy__handler {
	display: flex;
	align-content: center;
	justify-content: space-between;
	width: 100%;
	font-size: 14px;
}

.occupancy-rate {
	font-size: 14px;
	text-align: start;
	margin: 0;
}

.occupancy__button {
	border-radius: 8px;
	background-color: $LightBlue;
	color: $LighterBlue;
	font-size: 14px;
	border: 2px solid $LightBlue;
	width: 25px;
	height: 25px;
	&:hover {
		border: 2px solid white;
		color: white;
		cursor: pointer;
	}
}

.donut {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	flex: 1;

	&__percentage {
		position: absolute;
	}

	&__graph {
		position: absolute;
		height: 100%;
	}
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
</style>
