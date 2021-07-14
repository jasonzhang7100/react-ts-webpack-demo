// 在这里merge起common和dev和prod
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

// module.exports = envVars => {
//   const { env } = envVars;
//   const envConfig = require(`./webpack.${env}`);
//   return merge(commonConfig, envConfig);
// };

// 这样写防止eslint报错
module.exports = (envVars) => {
  const { env } = envVars;
  let envConfig;
  if (env === 'dev') {
    envConfig = require('./webpack.dev');
  } else if (env === 'prod') {
    envConfig = require('./webpack.prod');
  }
  return merge(commonConfig, envConfig);
};
