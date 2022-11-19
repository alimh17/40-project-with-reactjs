const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const PORT = process.env.PORT | 3000;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    port: PORT,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)?$/,
        loader: "file-loader",
        options: {
          type: "asset/resource",
        },
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss|sass)?$/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
    new miniCssExtractPlugin(),
  ],
};
