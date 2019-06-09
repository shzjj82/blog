'use strict';

module.exports = appInfo => {
  const config = exports = {
    keys: appInfo.name + '_1534345680378_5890',
    mongoose: {
      client: {
        url: 'mongodb://47.96.78.61:27017/blog',
        options: {
          useNewUrlParser: true,
          poolSize: 20
        },
      }
    },
    redis: {
      client: {
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        password: '',
        db: 0,
      },
    },
    LOGON_DURATION:60*60*24,
    middleware: [],
    security: {
      csrf: {
        enable: false,
      },
    },
  };
  return config;
};