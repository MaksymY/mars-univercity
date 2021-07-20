module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: "@use '@/scss' as *;",
			},
		},
	},
}
