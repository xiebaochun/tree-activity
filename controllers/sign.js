var User = require('../proxy').User;
var authMiddleWare = require('../middlewares/auth');
var config = require('../config');
var validator = require('validator');

var api_post = require('../libs/api_post');


exports.showLogin = function(req, res) {
    res.render('login/login', { error: false });
}

exports.login = function(req, res, next) {
    var username = validator.trim(req.body.username).toLowerCase();
    var password = validator.trim(req.body.pwd);
    if (!username || !password) {
        return res.render('login/login', { error: '请填写账号或密码' });
    }
    User.getUserByName(username, function(err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.render('login/login', { error: '用户不存在' });
        }
        //var pass = user.password;
        if (password == user.password) {
            req.session.user = user;
            authMiddleWare.gen_session(user, res);
            //res.render('login/login_success',{});
            res.redirect('/setting');
        } else {
            return res.render('login/login', { error: '密码错误' });
        }

    });
    //res.render('login/login_success',{});
}

exports.signout = function(req, res, next) {
    req.session.destroy();
    res.clearCookie(config.auth_cookie_name, { path: '/' });
    res.redirect('/signin');
}
