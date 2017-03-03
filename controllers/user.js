var User         = require('../proxy').User;
var wechatConfig = require('../config').weixin;
var authMiddleWare = require('../middlewares/auth');
var Wechat = require('wechat-jssdk');
var api_post = require('../libs/api_post');
//wx.initialize(wechatConfig);
const wx = new Wechat(wechatConfig);

exports.user = function(req, res, next) {
	console.log(req.session);
	var current_id = null;
	if(req.session.user){
	    current_id = req.session.user.id;
	}else{
	    return res.redirect('/signin');
	}
	User.getUserById( current_id,
	    function(err,data){
	        console.log('用户数据');
	        if(err){
	            res.render('404',{});
	        }
	        console.log(data);
	        if(data){
	            res.render('user/user', {
	                id: data.id || 00000,
	                name: data.name || 'default_name',
	                level: data.level || 0,
	                money_count: data.money|| 0,
	                rank: data.rank || 1,
	                experience: data.experience || 0,
	                current_nav:4
	            });
	        }else{
	            res.render('register/register',{});
	        }
	    }
	);
}

exports.oauth = function(req, res){
	wx.oauth.getUserInfo(req.query.code)
     .then(function(userProfile) {
       console.log(userProfile)
       // res.render("index", {
       //   wechatInfo: userProfile
       // });
       //req.session.user = userProfile;
       //authMiddleWare.gen_session(userProfile, res);

       // 注册用户
      api_post.post({
      			act:'get_user_info', 
      			open_id: userProfile.openid, 
      			avatar_url: userProfile.headimgurl,
      			nick_name: userProfile.nickname
      		},
       function(ret){
			if(ret.status == 1){
				console.log(ret);
				if(ret.status == 1){
					if(ret.user_info){
						ret.user_info.open_id = userProfile.openid;
						req.session.user = ret.user_info;
       					authMiddleWare.gen_session(ret.user_info, res);
       					res.redirect('/');
					}
				}
			}
		});
     });
}

exports.setting = function(req, res, next) {
	res.render('setting', {});
}

exports.showUpdatePwd = function(req, res, next) {
	res.render('user/update_pwd', {error:''});
}

exports.showUpdatePwdSuccess = function(req, res, next) {
	res.render('user/update_pwd_success');
}

exports.updatePwd = function(req, res, next) {
	var data = req.body;

	if(!data.username){
		res.render('user/update_pwd', {error: '请输入用户名'})
		return;	
	}

	if(!data.origin_pwd){
		res.render('user/update_pwd', {error: '请输入原密码'})
		return;
	}

	if(!data.new_pwd){
		res.render('user/update_pwd', {error: '请输入新密码'})
		return;
	}

	var origin_pwd = data.origin_pwd;
	var new_pwd = data.new_pwd;

	User.getUserByName(data.username, function(error, result){
		if(error) {
			res.render('user/update_pwd', {error: '用户不存在！'});
			return;
		}

		if(!result) {
			res.render('user/update_pwd', {error: '用户不存在'});
			return;	
		}

		if(result.password != origin_pwd) {
			res.render('user/update_pwd', {error: '原密码输入错误'});
			return;	
		}

		User.updatePwd({id: result.user_id, password: new_pwd}, function(error, result){
			console.log(result);
			if(error) {
				res.render('user/update_pwd', {error: '内部错误0002'});
				return;
			}

			if(!result) {
				res.render('user/update_pwd', {error: '用户不存在'});
				return;	
			}
			res.redirect('/update_pwd_success');
		});

	});
}









