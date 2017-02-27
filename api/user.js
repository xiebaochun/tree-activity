// 获取用户信息
exports.getUserInfoByOpenId = function(req, res, next) {
	var result = {response_code: '1', show_err: "用户已存在！", user_info: {
		is_received_tree: 0, //是否领取并种下了小树(0-未领取, 1-未领取)
		//is_received_gift_package: 1, //是否领取了礼包
		watering_able_count: 1, // 我的可浇水次数
		watered_count: 0, //小树已浇水次数
		is_binded_mobile: 0, // 是否绑定了手机(0-未绑定, 1-已绑定)
		is_new: 1, // 是否是新用户(0-旧用户, 1-新用户)

	}};
	//var result = {response_code: '0', show_err: "用户不存在！"};
	res.send(result);
}

exports.createUser = function(req, res, next) {
	var result = {response_code: '1', show_err: "创建用户成功！", user_info: {}};
	//var result = {response_code: '0', show_err: "创建用户失败！"};
	res.send(result);
}

// 浇水
exports.water =　function(req, res, next){
	req.body = {
		open_id: 'wx34534534'
	};
	var result = {response_code: 1, show_err: '浇水成功'};
	res.send(result);
}



