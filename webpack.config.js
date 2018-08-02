const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack           = require("webpack");
const path              = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

//package 變數一定要 "NODE_ENV" 為開頭
const keyName = {};
Object.keys(process.env).map((key, i) => {
  if (key.indexOf("NODE_ENV") == 0) {
    return (keyName[key] = process.env[key]);
  }
});
const env = keyName;

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template  : `${__dirname}/app/index.html`,
  filename  : "index.html",
  inject    : "body"
});

const contextFilePath    = env.NODE_ENV_REDUX_BUILD=="true"? ""       : "/components/list";
const libraryTargetType  = env.NODE_ENV_REDUX_BUILD=="true"? "umd"    : "commonjs2";
const externalsType      = env.NODE_ENV_REDUX_BUILD=="true"? {}       : {'react': 'commonjs react'};
const CWP                = env.NODE_ENV_REDUX_BUILD=="true"? [{ from: "./assets", to: "assets" }] : [];
const outputFilePath     = env.NODE_ENV_REDUX_BUILD=="true"? "/dist/" : "/commonjs/";

module.exports = {
  context         : path.join(__dirname, `/app${contextFilePath}` ),
  entry           : ["./index.js"],
  output          : {
    library         : "BrowserRouter",
    path            : `${__dirname}${outputFilePath}`,
    filename        : `./index.js`,
    libraryTarget   : libraryTargetType
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
    historyApiFallback   : true,
    contentBase          : "./app",
    watchContentBase     : false,
    inline               : true,
    port                 : 8002,
    host                 : "0.0.0.0",
    useLocalIp           : false,
    disableHostCheck     : false
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      "process.env"    : env
    }),
    new CopyWebpackPlugin( CWP ),
    new webpack.ProvidePlugin({
      $                : "jquery",
      jQuery           : "jquery",
      "window.jQuery"  : "jquery"
    })
  ],
  externals :externalsType
};
