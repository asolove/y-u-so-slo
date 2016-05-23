var webpack = require("webpack");
var config = require("./webpack.config.js");

function build(times) {
  webpack(config).run(function(e, stats) {
    console.log(stats.toString({ colors: true, chunks: false }));

    if(times > 0) {
      setTimeout(function() { build(times-1); }, 1);
    }
  });
}

build(20);
