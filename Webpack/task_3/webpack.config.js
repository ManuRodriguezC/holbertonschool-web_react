const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
 entry: {
  header: './modules/header/header.js',
  body: './modules/body/body.js',
  footer: './modules/footer/footer.js'
 },
 output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'public'),
  publicPath: ''
 },
 devServer: {
  contentBase: path.join(__dirname, 'public'),
  compress: true,
  port: 8564
 },
 module: {
  rules: [
    //...
  ]
 },
 plugins: [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './dist/index.html',
    filename: 'index.html'
  })
 ],
 mode: 'development',
 devtool: 'inline-source-map'
};
