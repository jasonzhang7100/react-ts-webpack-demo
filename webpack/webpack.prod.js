// 这个文件在common的基础上加专门针对prod模式的
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('usedToBeApiEndpointsForProd'),
    }),
  ],
};
