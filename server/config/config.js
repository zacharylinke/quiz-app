const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  // 10 days in minutes
  expireTime: 24 * 60 * 10,
  secrets: {
    jwt: process.env.JWT || 'dinosaur'
  }
}

// check to see if NODE_ENV was set, else set it to dev
process.env.NODE_ENV  = process.env.NODE_ENV || config.dev;
// set config.env to whatever NODE_ENV is
config.env = process.env.NODE_ENV;

const envConfig = require('./' + config.env);

module.exports = _.merge(config, envConfig);
