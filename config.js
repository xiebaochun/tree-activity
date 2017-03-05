/**
 * config
 */
var REDIRECT_URL = 'http://312activity.xiaoshushidai.com/wechat/oauth-callback';
var APP_ID = 'wxd292d9e457d266a6';
var APP_SECRET= 'd78202186af52351564f5fa234a93220';
var TOKEN = '312activity';

var config = {
    // mongodb 配置
    db: 'mongodb://127.0.0.1/demo',

    // redis 配置，默认是本地
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_db: 0,
    redis_password: '',

    session_secret: '312activity', // 务必修改

    auth_cookie_name: '312activity',

    mysql_conf: {
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'demo'
    },
    weixin: {
        "wechatRedirectUrl": REDIRECT_URL,
        "wechatToken": TOKEN,
        "appId": APP_ID,
        "appSecret": APP_SECRET,
        // "appId": "wx949d74074b4ebc27",
        // "appSecret": "489155673c2f23977d14d3700419c048",
    },
    weixin_sign:{
        appId: APP_ID,
        appSecret: APP_SECRET,
        appToken: TOKEN,
        cache_json_file:'/tmp'
    },
    weixin_auth_url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APP_ID + '&redirect_uri=' + REDIRECT_URL + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect',
}
module.exports = config;
