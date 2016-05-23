var webpack = require("webpack");

module.exports = {
	entry: {
		page1: "./src/page1",
		page2: "./src/page2"
	},
	output: {
		path: './built',
		filename: "[name].js",
		chunkFilename: "[id].js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		})
	]
}
