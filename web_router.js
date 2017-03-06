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
var auth = require('./middlewares/auth');

var router = express.Router();

// home page
//router.get('/', authMiddleWare.auth, site.index);
router.get('/', auth.auth, site.index);
router.get('/f-index/:open_id',auth.auth, site.f_index);
router.get('/get-tree',auth.auth, site.get_tree);
router.get('/rule',auth.auth, site.rule);
router.get('/xs-ticket', auth.auth,site.xs_ticket);
router.get('/gift-none', auth.auth,site.gift_none);


router.get('/get-tree',auth.auth, site.get_tree);
router.get('/gift-rule', auth.auth,site.gift_rule);
router.get('/my-gift/:gift_id', auth.auth, site.my_gifts);
router.get('/my-tree', auth.auth, site.my_tree);
router.get('/receive-friend-gifts/:f_user_id/:gift_id', auth.auth,site.receive_friend_gifts);
router.get('/verify-mobile',  auth.auth, site.verify_mobile);
router.get('/setting-pwd', auth.auth, site.setting_pwd);
router.get('/setting-pwd-success', auth.auth, site.setting_pwd_success);
router.get('/exchange-success', auth.auth, site.exchange_success);
router.get('/none-invest-user', auth.auth, site.none_invest_user);

router.get('/wechat/oauth-callback', user.oauth);
//router.get('/oauth-callback', user.oauth);

router.get('/api/wechat', site.weixin_verify);
//router.post('/start', site.start);

module.exports = router;