<template>
	<!-- eslint-disable max-len  -->
	<svg class="icons-set">
		<defs>
			<symbol id="right-arrow" viewBox="0 0 20 14">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M19.375 7.0221C19.375 6.70291 19.2255 6.41866 18.9926 6.23557L11.9409 0.594168C11.5096 0.249158 10.8803 0.31908 10.5353 0.750342C10.1903 1.1816 10.2602 1.8109 10.6915 2.15591L15.5242 6.0221H1.785C1.23272 6.0221 0.785 6.46981 0.785 7.0221C0.785 7.57438 1.23272 8.0221 1.785 8.0221H15.5242L10.6915 11.8883C10.2602 12.2333 10.1903 12.8626 10.5353 13.2938C10.8803 13.7251 11.5096 13.795 11.9409 13.45L18.9924 7.80879C19.037 7.77377 19.0785 7.73505 19.1165 7.69308C19.2771 7.51566 19.375 7.2803 19.375 7.0221Z"
				/>
			</symbol>
			<symbol id="brand-icon" viewBox="0 0 100 100" fill="none">
				<circle cx="50" cy="50" r="50" fill="url(#paint0_radial)" />
				<defs>
					<radialGradient
						id="paint0_radial"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(70.3125 34.375) rotate(143.427) scale(60.3133)"
					>
						<stop stop-color="#FFC90C" />
						<stop offset="0.817708" stop-color="#FF5C00" />
						<stop offset="1" stop-color="#D14B00" />
					</radialGradient>
				</defs>
			</symbol>
		</defs>
	</svg>
</template>

<style lang="scss">
.icons-set {
	visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -9999;
	pointer-events: none;
	user-select: none;
	width: 0;
	height: 0;
	opacity: 0;
}
</style>
