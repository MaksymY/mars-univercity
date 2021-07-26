<template>
	<ModuleLayout label="Taux d'occupation" icon="oxygen-icon">
		<div class="occurancy">
			<div class="donut">
				<div class="donut-chart chart">
					<div class="dunutGraph">
						<p class="dunutGraphtext">10%</p>
						<figure class="dunutGraphgraph">
							<svg width="100%" height="100%" viewBox="0 0 42 42" class="dunutGraph__graph-donut">
								<circle class="dunutGraphgraph-donut-segment" cx="21" cy="21" r="16"></circle>
								<circle
									class="dunutGraph__graph-donut-ring"
									:style="{ strokeDashoffset: 0 }"
									cx="21"
									cy="21"
									r="16"
								></circle>
							</svg>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</ModuleLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModuleLayout from "../ModuleLayout.vue";
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
	},
	data: function () {
		return {
			styleObject: {
				color: "red",
				fontSize: "13px",
			},
		};
	},
});
</script>

<style lang="scss">
.occurancy {
	display: flex;
	justify-content: center;
}

.dunutGraphtext {
	position: absolute;
	transform: translateY(36px) translateX(85px);
	color: $purple;
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
