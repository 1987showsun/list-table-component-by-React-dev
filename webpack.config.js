const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack           = require("webpack");
const path              = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const apiUrl = "http://192.168.211.1:8090/";
//const apiUrl = "http://203.95.195.185:20053/";

//package 變數一定要 "NODE_ENV" 為開頭
const keyName = {};
Object.keys(process.env).map((key, i) => {
  if (key.indexOf("NODE_ENV") == 0) {
    return (keyName[key] = process.env[key]);
  }
});
const env = keyName;

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: "index.html",
  inject: "body"
});

module.exports = {
  context: path.join(__dirname, "/app"),
  entry: ["./index.js"],
  output: {
    library: "BrowserRouter",
    path: `${__dirname}/dist/`,
    filename: `./index.js`
  },
  resolve: {
    modules: [
      path.resolve("app"),
      path.resolve("app/public/images"),
      path.resolve("node_modules")
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: [
            "react-html-attrs",
            "transform-class-properties",
            "transform-decorators-legacy"
          ]
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        loader: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limt: 0,
              name: "[path][name].[ext]?[hash:8]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "60-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    //contentBase: './dist',
    contentBase: "./app",
    watchContentBase: false,
    inline: true,
    //hot                : true,
    port: 8002,
    host: "0.0.0.0",
    useLocalIp: false,
    disableHostCheck: false
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      "process.env": env
    }),
    new CopyWebpackPlugin([{ from: "./assets", to: "assets" }]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
