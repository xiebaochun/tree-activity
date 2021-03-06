var AES_encrypt = require('./encrypt').AES_encrypt;
var request = require('request');
var ROOT_URL = 'http://www.xiaoshushidai.com/mapis/index.php?mrt=mrt3&r_type=1&i_type=4&dev_type=WAP&version=2015102015&requestData=';

exports.post = function(data, callback) {
	//console.log('post >>>>>>');
	//console.log(data);
	var request_data = encodeURIComponent(AES_encrypt(JSON.stringify(data)));
	request.post(ROOT_URL + request_data, {}, function(error, response, body){
		if(!error && response.statusCode == 200) {
			//console.log('api_post请求成功：');
			//console.log(data);
			//console.log(typeof body);
			//console.log(body);
			if(typeof body == 'string'){
				try{
					body = JSON.parse(body);
				}catch(e){
					console.log(e);
					callback({
						status: 0,
						msg: 'api请求地址出错',
						show_err: '请求地址出错'
					});
					return;
				}
			}
			//callback(body);
			if(body['response_code'] == 1){
				body.status = 1;
				callback(body);
			}else{
				console.log('api_post请求出错！');
				console.log(body);
				body.status = 0;
				callback(body);
				// callback({
				// 	status: 0,
				// 	msg: 'api_post请求出错！',
				// 	show_err: body.show_err
				// });
			}
		}else{
			console.log('api_post请求失败！');
			console.log(body);
			callback({
				status: 0,
				msg: 'api_post请求失败！',
				show_err: ''
			});
		}
	});
}

exports.normal_post = function(url, callback) {
	//console.log('normal post >>>>>>');
	//console.log(ROOT_URL + url);
	//var request_data = encodeURIComponent(AES_encrypt(JSON.stringify(data)));
	request.post(ROOT_URL + url, {}, function(error, response, body){
		if(!error && response.statusCode == 200) {
			//console.log('api_post请求成功：');
			//console.log(ROOT_URL + url);
			//console.log(typeof body);
			//console.log(body);
			if(typeof body == 'string'){
				try{
					body = JSON.parse(body);
				}catch(e){
					console.log(e);
					callback({
						status: 0,
						msg: 'api请求地址出错',
						show_err: '请求地址出错'
					});
					return;
				}
			}
			//callback(body);
			if(body['response_code'] == 1){
				body.status = 1;
				callback(body);
			}else{
				console.log('api_post请求出错！');
				console.log(body);
				body.status = 0;
				callback(body);
				// callback({
				// 	status: 0,
				// 	msg: 'api_post请求出错！',
				// 	show_err: body.show_err
				// });
			}
		}else{
			console.log('api_post请求失败！');
			console.log(error);
			console.log(response);
			console.log(body);

			callback({
				status: 0,
				msg: 'api_post请求失败！',
				show_err: ''
			});
		}
	});
}
