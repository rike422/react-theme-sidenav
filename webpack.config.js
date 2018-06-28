const path = require('path');


module.exports = {
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] }
    ]
  },
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  devtool: "source-map",
  resolve: {
    extensions: [".js", '.jsx'],
    alias: {
      "react-sidenav": path.resolve(__dirname, "src")
    }
  }
};

