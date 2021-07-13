module.exports = {
	images: {
		loader: 'cloudinary'
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
// https://res.cloudinary.com/dwdpk9oxk/image/upload/v1617285951/avatar_0840e6c685.png?w=750&q=75