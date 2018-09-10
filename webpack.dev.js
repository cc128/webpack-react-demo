const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const bootstrapEntryPoints = require('./webpack.bootstrap.config')

module.exports = merge(common, {
  entry: {
    "main.bundle": './src/main.js',
    // "admin": './src/admin.js',
    // "bootstrap": bootstrapEntryPoints.dev
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 9000,
    open: true,
    host: '0.0.0.0'
  }
});