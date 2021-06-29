// 在这里merge起common和dev和prod
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = envVars => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}`);
  return merge(commonConfig, envConfig);
};
