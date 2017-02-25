var wx = require('wechat-jssdk');
var wechatConfig = require('../config').weixin;
wx.initialize(wechatConfig);

exports.index = function (req, res, next) {
	
	res.render('index', {});	
};
