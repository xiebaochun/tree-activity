var config         = require('../config');
var UserProxy      = require('../proxy').User;
var api_post = require('../libs/api_post');

//产生session数据
function gen_session(user, res) {
	var auth_token = user._id + '$$$$'; 
	var opts = {
		path: '/',
		maxAge: 1000 * 60 * 60 * 24 * 30,
		signed: true,
		httpOnly: true
	};
	res.cookie(config.auth_cookie_name, auth_token, opts);
}

exports.gen_session = gen_session;

exports.authUser = function(req, res, next) {
	//Ensure current_user always has defined.
	res.locals.current_user = null;
	var auth_token = req.signedCookies[config.auth_cookie_name];
	if(!auth_token){
		return next();
	}

	var auth = auth_token.split('$$$$');
	var user_id = auth[0];
	UserProxy.getUserById(user_id, function(err, user){
		if(!user){
			return next();
		}
		res.locals.current_user = user;
		next();
	});

}

exports.auth = function(req, res, next) {
	var user = req.session.user;
	// console.log('auth里打印的user:');
	// console.log(user);
	// req.session.auth_redirect_url = req.originalUrl;
	// 	res.redirect(config.weixin_auth_url);
	// 	return;
	if(user){
		//api_post.post({act:'is_user_exist', open_id: user.open_id}, function(ret){
			//if(ret.status == 1){
				//if(ret.data.is_exist == 1){
					//res.locals.username = user.name;
					//res.locals.user_info = user;
					
					var signature = require('wx_jsapi_sign');
					var url = 'http://312activity.xiaoshushidai.com/';
					url = req.protocol + '://' + req.get('host') + req.originalUrl;
					signature.getSignature(config.weixin_sign)(url, function(error, result) {
					  if(error){
					    console.log('middleware.js 产生的微信签名的错误：');
					    console.log(error);
					    next();
					  }
					  //console.log('middleware.js 产生的微信签名：');
					  //console.log(result);
					  res.locals.signatureData = result;
					  return next();
					});
				// }else{
				// 	req.session.auth_redirect_url = req.originalUrl;
				// 	res.redirect(config.weixin_auth_url);
				// }
			//}
		//});
		
	}else{
		req.session.auth_redirect_url = req.originalUrl;
		res.redirect(config.weixin_auth_url);
		//res.redirect('/');
	}
}

exports.signature = function(req, res, next) {
	var signature = require('wx_jsapi_sign');
	var url = 'http://312activity.xiaoshushidai.com/';
		url = req.protocol + '://' + req.get('host') + req.originalUrl;
	signature.getSignature(config.weixin_sign)(url, function(error, result) {
	  if(error){
	    console.log('middleware.js 产生的微信签名的错误：');
	    console.log(error);
	    next();
	  }
	  console.log('middleware.js 产生的微信签名：');
	  console.log(result);
	  res.locals.signatureData = result;
	  next();
	});
}