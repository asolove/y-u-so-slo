var webpack = require("webpack");
var config = require("./webpack.config.js");

webpack(config).run(function(e, stats) {
	console.log(stats.toString({ colors: true, chunks: false }));
});
