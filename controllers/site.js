var config         = require('../config');
var wechatConfig = require('../config').weixin;
var wechat_sigin_config = require('../config').weixin_sign;
var Wechat = require('wechat-jssdk');
var signature = require('wx_jsapi_sign');
var authMiddleWare = require('../middlewares/auth');
//wx.initialize(wechatConfig);
const wx = new Wechat(wechatConfig);

var api_post = require('../libs/api_post');
//console.log(wx);

exports.index = function (req, res, next) {
	if(req.session.user){
		console.log('/ controller session user:');
		console.log(req.session.user);
		var open_id = req.session.user.open_id;
		api_post.post({act:'get_user_info', open_id: open_id}, function(ret){
			if(ret.status == 1){
				console.log('get user info>>>>>>>>>>>>>>>>:');
				console.log(ret);

				req.session.user = ret.user_info;
				console.log(ret.user_info.is_received_tree == 0);

				if(ret.user_info.is_received_tree == 0){
					res.redirect('/get-tree');
				}else{
					res.render('index', {open_id: open_id,user_info:ret.user_info});	
				}
			}
		});
	}else{
		// 让用户去授权
		res.redirect(config.weixin_auth_url);
	}
};

exports.f_index = function (req, res, next) {
	console.log('帮朋友浇水：open_id');
	console.log(req.params.open_id);
	if(req.params.open_id == req.session.user.open_id){
		res.redirect('/');
	}else{
		res.render('f_index', {open_id: req.session.user.open_id, f_open_id: req.params.open_id});	
	}


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
	//console.log();
	var gift_id = req.params.gift_id;
	api_post.post({act:'get_gift', gift_id: gift_id}, function(ret){
		console.log('获取礼品详情成功：');
		console.log(ret);
		if(ret.status == 1){

			var content = '';
			var gift = ret.data;
			var pre = '恭喜你获得';
			
			switch(parseInt(gift.type_id)){
				case 1:
				content = pre + gift.amount + '元现金红包';
				break;
				case 2:
				content = pre + gift.amount + '元理财券';
				break;
				case 3:
				content = pre + '1张小树券';
				break;
				case 4:
				content = pre + '1次浇水机会';
				break;
				case 5:
				content = pre + gift.name;
				break;
			}	
			gift.info = content;
			res.render('activity/my_gifts', {gift: gift});
		}else{
			res.redirect('/');
		}
	});

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

