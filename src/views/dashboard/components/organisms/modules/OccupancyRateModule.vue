<template>
	<div class="module-layout">
		<div class="module-layout__header">
			<Icon class="module-layout__header__icon" href="people-square-icon" />
			<h3 class="module-layout__header__title">Taux d’occupation</h3>
		</div>
		<div class="donut-chart chart">
			<div class="slice one"></div>
			<div class="slice two"></div>
			<div class="chart-center">
				<span></span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/atoms/Icon.vue";
export default defineComponent({
	name: "OccupancyRateModule",
	components: {
		Icon,
	},
	props: {
		dataSets: {
			type: Object,
			required: true,
		},
	},
});
</script>

<style lang="scss">
@mixin donut-chart(
	$name,
	$perc,
	$size,
	$width,
	$base,
	$center,
	$color,
	$textColor: $color,
	$textSize: 40px
) {
	$color2: $color;
	$base2: $base;
	$deg: ($perc/100 * 360) + deg;
	$deg1: 90deg;
	$deg2: $deg;

	@if $perc < 50 {
		$base: $color;
		$color: $base2;
		$color2: $base2;
		$deg1: ($perc/100 * 360+90) + deg;
		$deg2: 0deg;
	}

	.donut-chart {
		&#{".chart"} {
			width: $size;
			height: $size;
			background: $base;

			.slice {
				&.one {
					clip: rect(0 $size $size/2 0);
					-webkit-transform: rotate($deg1);
					transform: rotate($deg1);
					background: $color;
					border-radius: 8px;
				}

				&.two {
					clip: rect(0 $size/2 $size 0);
					-webkit-transform: rotate($deg2);
					transform: rotate($deg2);
					background: $color2;
					border-radius: 8px;
				}
			}

			.chart-center {
				top: $width;
				left: $width;
				width: $size - ($width * 2);
				height: $size - ($width * 2);
				background: $center;

				span {
					font-size: $textSize;
					line-height: $size - ($width * 2);
					color: $textColor;

					&:after {
						content: "#{$perc}%";
					}
				}
			}
		}
	}
}

@include donut-chart(".chart", 62, 200px, 10px, black, $BlackRussian, #50c690);

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
