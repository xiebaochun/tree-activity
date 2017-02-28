var wechatConfig = require('../config').weixin;
var Wechat = require('wechat-jssdk');
//wx.initialize(wechatConfig);
const wx = new Wechat(wechatConfig);
//console.log(wx);

exports.index = function (req, res, next) {
	var requestedUrl = req.protocol + '://' + req.get('Host') + req.url;
	console.log(requestedUrl);
	wx.jssdk.getSignature(requestedUrl).then(function(signatureData) {
	      //res.json(signatureDate);
	    console.log(signatureData);
	});
	  
	var signatureData ={};
	res.render('index', {signatureData:signatureData});	
	//var signatureData ={};
	//}
	// wx.oauth.getUserInfo(req.query.code)
 //      .then(function(userProfile) {
 //        console.log(userProfile)
 //        res.render("index", {
 //          wechatInfo: userProfile
 //        });
 //      });
};

exports.weixin_verify = function(req, res) {
	console.log(req.query);
    if (wx.jssdk.verifySignature(req.query)) {
        res.send(req.query.echostr);
        return;
    }
    res.send("error");
}

exports.get_tree = function(req, res, next) {
	res.render('activity/get_tree', {});
}

exports.rule = function(req, res, next) {
	res.render('activity/rule', {});
}

exports.get_tree = function(req, res, next) {
	res.render('get_tree', {});
}
exports.gift_rule = function(req, res, next) {
	res.render('gift_rule', {});
}
exports.my_gifts = function(req, res, next) {
	res.render('my_gifts', {});
}
exports.my_tree = function(req, res, next) {
	res.render('my_tree', {});
}
exports.receive_friend_gifts = function(req, res, next) {
	res.render('receive_friend_gifts', {});
}
exports.verify_mobile = function(req, res, next) {
	res.render('verify_mobile', {});
}

//

