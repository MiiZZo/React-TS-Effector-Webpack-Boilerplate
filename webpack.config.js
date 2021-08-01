const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const resolvePath = (file) => path.resolve(__dirname, file);

const PATHS = {
  entry: resolvePath("./src/index.tsx"),
  dist: resolvePath("./dist"),
  alias: {
    app: resolvePath("./src/app"),
    pages: resolvePath("./src/pages"),
    features: resolvePath("./src/features"),
    entities: resolvePath("./src/entities"),
    shared: resolvePath("./src/shared"),
  },
  template: resolvePath("./src/index.html"),
};

/** @type {import('webpack').Configuration} */
module.exports = {
  target: "web",
  entry: PATHS.entry,
  output: {
    filename: "[name].[contenthash].js",
    path: PATHS.dist,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: PATHS.alias,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.template,
      minify: true,
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
