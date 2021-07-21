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
			<symbol id="people-square-icon" viewBox="0 0 24 24" fill="none">
				<rect x="0.5" y="0.5" width="23" height="23" rx="3.5" />
				<path
					d="M10.5182 11.4104C10.466 11.4052 10.4034 11.4052 10.346 11.4104C9.10425 11.3687 8.11816 10.3513 8.11816 9.09911C8.11816 7.82085 9.15121 6.78259 10.4347 6.78259C11.7129 6.78259 12.7512 7.82085 12.7512 9.09911C12.746 10.3513 11.7599 11.3687 10.5182 11.4104Z"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M14.3012 7.82605C15.3134 7.82605 16.1273 8.64518 16.1273 9.65214C16.1273 10.6382 15.3447 11.4417 14.3691 11.4782C14.3273 11.473 14.2804 11.473 14.2334 11.4782"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M7.90985 13.3357C6.64724 14.1809 6.64724 15.5583 7.90985 16.3983C9.34463 17.3583 11.6977 17.3583 13.1325 16.3983C14.3951 15.5531 14.3951 14.1757 13.1325 13.3357C11.7029 12.3809 9.34985 12.3809 7.90985 13.3357Z"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.3076 16.1739C15.6833 16.0956 16.0381 15.9443 16.3302 15.72C17.1441 15.1095 17.1441 14.1026 16.3302 13.4922C16.0433 13.273 15.6937 13.1269 15.3233 13.0435"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
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
