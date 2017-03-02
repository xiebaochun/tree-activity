var wechatConfig = require('../config').weixin;
var wechat_sigin_config = require('../config').weixin_sign;
var Wechat = require('wechat-jssdk');
var signature = require('wx_jsapi_sign');
//wx.initialize(wechatConfig);
const wx = new Wechat(wechatConfig);
//console.log(wx);

exports.index = function (req, res, next) {
	// var requestedUrl = req.protocol + '://' + req.get('Host') + req.url;
	// console.log(requestedUrl);
	// wx.jssdk.getSignature(requestedUrl).then(function(signatureData) {
	//       //res.json(signatureDate);
	//     console.log(signatureData);
	//     res.render('index', {signatureData:signatureData});	
	// });
	 
	var url = req.protocol + '://' + req.get('Host') + req.url;
	signature.getSignature(wechat_sigin_config)(url, function(error, result) {
        if (error) {
            console.log(error);
        } else {
        	console.log(result);
        	var open_id = result.open_id;

        	console.log('session');
        	console.log(req.session);
        	// 检测是否已注册
        	if(req.session.user){
            	res.render('index', {signatureData:result});	
        	}else{
        		res.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx949d74074b4ebc27&redirect_uri=http://312activity.xiaoshushidai.com/wechat/oauth-callback&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect');
        	}
        }
    });

	// var signatureData ={};
	// res.render('index', {signatureData:signatureData});	
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

exports.f_index = function (req, res, next) {
	// var requestedUrl = req.protocol + '://' + req.get('Host') + req.url;
	// console.log(requestedUrl);
	// wx.jssdk.getSignature(requestedUrl).then(function(signatureData) {
	//       //res.json(signatureDate);
	//     console.log(signatureData);
	// });
	  
	var signatureData ={};
	res.render('f_index', {signatureData:signatureData});	
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

exports.xs_ticket = function(req, res) {
	res.render('activity/xs_ticket', {});
}

exports.gift_none = function(req, res) {
	res.render('activity/gift_none', {});	
}

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
	res.render('activity/get_tree', {});
}
exports.gift_rule = function(req, res, next) {
	res.render('activity/gift_rule', {});
}
exports.my_gifts = function(req, res, next) {
	res.render('activity/my_gifts', {});
}
exports.my_tree = function(req, res, next) {
	res.render('activity/my_tree', {});
}
exports.receive_friend_gifts = function(req, res, next) {
	res.render('receive_friend_gifts', {});
}
exports.verify_mobile = function(req, res, next) {
	res.render('user/verify_mobile', {});
}

exports.setting_pwd = function(req, res, next) {
	res.render('user/setting_pwd', {});
}

exports.setting_pwd_success = function(req, res, next) {
	res.render('user/setting_pwd_success', {});
}

//

