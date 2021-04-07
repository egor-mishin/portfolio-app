module.exports = {
	images: {
	domains: ['res.cloudinary.com']
	},

	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			'/': { page: '/' },
			'/blog': { page: '/blog' },
			'/portfolio': { page: '/portfolio' },
		}
	},

}
