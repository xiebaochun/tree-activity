var mongoose = require('mongoose');
var config   = require('../config');
console.log(config.db);
var db = mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    console.log('connect to %s error: ' + err.message);
    process.exit(1);
  }
});

// models
require('./user');

exports.User         = mongoose.model('User');