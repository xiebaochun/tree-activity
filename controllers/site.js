var config         = require('../config');
var wechatConfig = require('../config').weixin;
var wechat_sigin_config = require('../config').weixin_sign;
var Wechat = require('wechat-jssdk');
var signature = require('wx_jsapi_sign');
//wx.initialize(wechatConfig);
const wx = new Wechat(wechatConfig);

var api_post = require('../libs/api_post');
//console.log(wx);

exports.index = function (req, res, next) {
	// var requestedUrl = req.protocol + '://' + req.get('Host') + req.url;
	// console.log(requestedUrl);
	// wx.jssdk.getSignature(requestedUrl).then(function(signatureData) {
	//       //res.json(signatureDate);
	//     console.log(signatureData);
	//     res.render('index', {signatureData:signatureData});	
	// });
	res.render('index', {signatureData:{}});
	// req.session.destroy();
 //    res.clearCookie(config.auth_cookie_name, { path: '/' });
	return;

	var url = req.protocol + '://' + req.get('Host') + req.url;
	signature.getSignature(wechat_sigin_config)(url, function(error, result) {
        if (error) {
            console.log(error);
        } else {
        	console.log('index >>>>>>');
        	console.log(result);
        	var open_id = result.appId;
        	if(req.session.user){
        		console.log('/ controller session user:');
        		console.log(req.session.user);
    			api_post.post({act:'get_user_info', open_id: open_id}, function(ret){
    				if(ret.status == 1){
    					console.log('get user info>>>>>>>>>>>>>>>>:');
    					console.log(ret.user_info.is_received_tree == 0);
    					if(ret.user_info.is_received_tree == 0){
    						res.redirect('/get-tree');
    					}else{
    						res.render('index', {signatureData:result,open_id: open_id});	
    					}
    				}
    			});
        		//res.render('index', {signatureData:result});
        	}else{
        		// 判断用户是否村
	        	api_post.post({act:'is_user_exist',open_id:open_id},function(ret){
	        		console.log(ret);
	        		console.log(typeof ret);
	        		if(ret.status == 1){
		        		if(ret.data){
		        			// 如果用户不存在
			        		if(ret.data.is_exist == 0){
			        			// 让用户微信授权并注册
		        				res.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx949d74074b4ebc27&redirect_uri=http://312activity.xiaoshushidai.com/wechat/oauth-callback&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect');
			        		}else{
			        			//获取用户信息
			        			api_post.post({act:'get_user_info', open_id: open_id}, function(ret){
			        				if(ret.status == 1){
			        					console.log(ret);
			        					req.session.user = ret.user_info;
			        					if(ret.user_info.is_received_tree == 0){
			        						res.redirect('/get-tree');
			        					}else{
		            						res.render('index', {signatureData:result, open_id: open_id});	
			        					}
			        				}
			        			});
			        		}
		        		}
	        		}
	        	});
        	}
	        	
        	function getUserInfo(){

        	}
        	//console.log('session');
        	//console.log(req.session);
        	// 检测是否已注册
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
	console.log('get_tree >>>> session:');
	console.log(req.session.user);
	//var user = req.session.user;
	api_post.post({act: 'get_user_info', open_id:req.session.user.open_id}, function(ret){
		if(ret.status == 1){
			var user_info = ret.user_info;
			console.log('get_user_info >>>> user:');
			console.log(user_info);
			if(user_info.is_received_tree == 1){
				res.redirect('/');
			}else{
				res.render('activity/get_tree', {user_info: user_info});
			}
		}
	});
}

exports.rule = function(req, res, next) {
	res.render('activity/rule', {});
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

