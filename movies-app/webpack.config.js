const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

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
        test: /\.(png|jpg|jpeg|gif|mp3|)?$/,
        loader: "file-loader",
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss|sass)?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
  ],
};
