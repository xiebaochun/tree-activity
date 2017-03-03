var config         = require('../config');
var UserProxy      = require('../proxy').User;

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
	if(user){
		//res.locals.username = user.name;
		res.locals.user_info = user;
		return next();
	}else{
		res.redirect('/');
	}
}