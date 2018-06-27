const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'req': path.resolve(__dirname, './src/req')
    }
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    proxy: {
      "/api": {
        target: 'https://m.toutiao.com',
        // target: 'http://10.163.126.142:8080/user',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      minify: false,
      hash: process.env.NODE_ENV === 'production',
      //   excludeChunks: ['contact']
    }),
    new HtmlWebpackPlugin({
      template: './src/admin/admin.html',
      filename: 'admin.html',
      minify: false,
      hash: process.env.NODE_ENV === 'production',
      //   chunks: ['contact']
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
        })
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.pug$/, loader: ['raw-loader', 'pug-html-loader'] },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
        }]
      },
      { test: /\.woff2?$/, loader: 'url-loader?limit=10000&name=[name].[ext]&outputPath=fonts/' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader?name=[name].[ext]&outputPath=fonts/' },
      //   { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
    ]
  }
};