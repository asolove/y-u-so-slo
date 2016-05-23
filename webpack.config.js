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
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      })
    ]
}
