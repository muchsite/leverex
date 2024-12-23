const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/Index.tsx",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/frontend/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    historyApiFallback: {
      index: "/index.html",
    },
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv(),
  ],
};
