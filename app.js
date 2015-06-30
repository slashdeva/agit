var https = require('https')
var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

var fs = require('fs');

var app = express();

require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
	https.createServer({
	  key: fs.readFileSync(config.key),
	  cert: fs.readFileSync(config.cert),
	  requestCert: true,
	}, app).listen(config.port);
  }).catch(function (e) {
    throw new Error(e);
  });

