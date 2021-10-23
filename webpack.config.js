var path = require("path");

//...
var BrotliPlugin = require('brotli-webpack-plugin');
And include it within the plugins array:

module.exports = {
  // ...
  plugins: [
    // ...
    new BrotliPlugin({
      asset: '[file].br',
      test: /\.(js)$/
    })
  ]
},