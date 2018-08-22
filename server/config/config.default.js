'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534345680378_5890';

  config.mongoose = {
    client: {
      url: 'mongodb://47.96.78.61:27017/blog',
      options: {
        useNewUrlParser: true,
        poolSize: 20
      },
    }
  }

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: false
  };


  return config;
};
