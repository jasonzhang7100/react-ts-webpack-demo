// 这个文件在common的基础上加专门针对dev模式的
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // 这个取值体现在process.env.NODE_ENV上
  mode: 'development',
  devServer: {
    // 要是用react refresh插件，hmr插件开关也是要开的
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      // 当然也可以给process.env加其他属性，这里一般用来放api端点路径什么的参数
      'process.env.name': JSON.stringify('usedToBeApiEndpointsForDev'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
