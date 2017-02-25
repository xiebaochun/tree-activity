/*!
 * nodeclub - route.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var express = require('express');
var site = require('./controllers/site');

var router = express.Router();

// home page
//router.get('/', authMiddleWare.auth, site.index);
router.get('/', site.index);
router.post('/start', site.start);

module.exports = router;