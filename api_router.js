var express = require('express');
var index = require('./api/index');

var router = express.Router();

// home page
router.post('/', index.index);

module.exports = router;