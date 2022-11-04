import { resolve } from "path";
import * as webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: false ? "production" : "development",
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.tsx?$/,
  //         use: "ts-loader",
  //         exclude: /node_modules/,
  //       },
  //     ],
  //   },
  //   resolve: {
  //     // 配置支持ts文件
  //     extensions: [".tsx", ".ts", ".js"],
  //   },
  plugins: [
    // 热更新插件
    // new webpack.HotModuleReplacementPlugin(),
    // 动态创建html文件
    new HtmlWebpackPlugin({ filename: "index.html", template: "./src/index.html" }),
  ],
};

export default config;
