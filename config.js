/**
 * config
 */

var path = require('path');

var config = {
  // mongodb 配置
  db: 'mongodb://127.0.0.1/demo',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',
  
  session_secret: 'demo_secret', // 务必修改

  auth_cookie_name: 'demo_attack',

  mysql_conf: {
				  host     : 'localhost',
				  user     : 'root',
				  password : '123',
				  database : 'demo'
				},
   attack_time_interval: 10000, //轰炸时间间隔（毫秒）
}
module.exports = config;