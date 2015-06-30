var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'agit'
    },
    port: 3000,
    db: 'postgres://user:password@localhost/agit-development',
	key: 'key.pem',
	cert: 'cert.pem'
  },

  test: {
    root: rootPath,
    app: {
      name: 'agit'
    },
    port: 3000,
    db: 'postgres://user:password@localhost/agit-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'agit'
    },
    port: 3000,
    db: 'postgres://user:password@localhost/agit-production'
  }
};

module.exports = config[env];
