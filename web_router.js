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
var user = require('./controllers/user');

var router = express.Router();

// home page
//router.get('/', authMiddleWare.auth, site.index);
router.get('/', site.index);
router.get('/f-index', site.f_index);
router.get('/get-tree', site.get_tree);
router.get('/rule', site.rule);
router.get('/xs-ticket', site.xs_ticket);
router.get('/gift-none', site.gift_none);


router.get('/get-tree', site.get_tree);
router.get('/gift-rule', site.gift_rule);
router.get('/my-gifts', site.my_gifts);
router.get('/my-tree', site.my_tree);
router.get('/receive-friend-gifts', site.receive_friend_gifts);
router.get('/verify-mobile', site.verify_mobile);
router.get('/setting-pwd', site.setting_pwd);
router.get('/setting-pwd-success', site.setting_pwd_success);

router.get('/wechat/oauth-callback', user.oauth);

router.get('/api/wechat', site.weixin_verify);
//router.post('/start', site.start);

module.exports = router;