const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "playground", "index.jsx"),

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] }
    ]
  },
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  devtool: "source-map",
  resolve: {
    alias: {
      "react-sidenav": path.resolve(__dirname, "src")
    }
  }
};

