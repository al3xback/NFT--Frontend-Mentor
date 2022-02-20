module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/preload.scss";
				`,
			},
		},
	},
	publicPath: process.env.NODE_ENV === 'production' ? '/NFT-vue/' : '/',
};
