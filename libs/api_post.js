var AES_encrypt = require('./encrypt').AES_encrypt;
var request = require('request');
var ROOT_URL = 'http://wentest.xiaoshushidai.com/mapis/index.php?mrt=mrt3&r_type=1&i_type=4&dev_type=WAP&version=2015102015&requestData=';

exports.post = function(data, callback) {
	console.log('post >>>>>>');
	console.log(data);
	var request_data = encodeURIComponent(AES_encrypt(JSON.stringify(data)));
	request.post(ROOT_URL + request_data, {}, function(error, response, body){
		if(!error && response.statusCode == 200) {
			console.log('api_post请求成功：');
			console.log(typeof body);
			console.log(body);
			if(typeof body == 'string'){
				body = JSON.parse(body);
			}
			//callback(body);
			if(body['response_code'] == 1){
				body.status = 1;
				callback(body);
			}else{
				callback({
					status: 0,
					msg: 'api_post请求出错！',
					show_err: body.show_err
				});
			}
		}else{
			callback({
				status: 0,
				msg: 'api_post请求失败！',
				error: error
			});
		}
	});
}