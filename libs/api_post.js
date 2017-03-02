var AES_encrypt = require('./encrypt').AES_encrypt;
var request = require('request');
var ROOT_URL = '';

exports.post = function(act, data, callback) {
	request.post(ROOT_URL + act, data, function(error, response, body){
		if(!error && response.statusCode == 200) {
			callback({
				response_code: 1,
				data: body
			});
		}else{
			callback({
				response_code: 0,
				error: '请求失败！'
			});
		}
	});
}