var api_post = require('../libs/api_post');

exports.index = function(req, res, next){
	var url = req.body.url;
	api_post.normal_post(url,function(ret){
		console.log(ret);
		res.send(ret);
	});
}


// 获取用户信息
exports.get_user_info = function(req, res, next) {
	// var result = {response_code: '1', show_err: "用户已存在！", user_info: {
	// 	is_received_tree: 0, //是否领取并种下了小树(0-未领取, 1-未领取)
	// 	//is_received_gift_package: 1, //是否领取了礼包
	// 	watering_able_count: 1, // 我的可浇水次数
	// 	watered_count: 0, //小树已浇水次数
	// 	is_binded_mobile: 0, // 是否绑定了手机(0-未绑定, 1-已绑定)
	// 	is_new: 1, // 是否是新用户(0-旧用户, 1-新用户)

	// }};
	// //var result = {response_code: '0', show_err: "用户不存在！"};
	req.body.act = 'get_user_info';
	api_post.normal_post(req.body,function(ret){
		console.log(ret);
		res.send(ret);
	});
}

exports.is_user_exist = function(req, res, next) {
	req.body.act = 'is_user_exist';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

// exports.createUser = function(req, res, next) {
// 	var result = {response_code: '1', show_err: "创建用户成功！", user_info: {}};
// 	//var result = {response_code: '0', show_err: "创建用户失败！"};
// 	res.send(result);
// }

exports.is_new_user = function(req, res, next) {
	// req.body = {
	// 	mobile: '13083951288' // 用户手机号码
	// }

	// var result = {response_code: 1, data:{
	// 	isNew: 0, //是否是新用户(0-旧用户, 1-新用户)
	// }}
	req.body.act = 'is_new_user';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}


exports.register = function(req, res, next) {
	// req.body = {
		
	// }

	// var result = {

	// }
	req.body.act = 'register';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

// 浇水
exports.water =　function(req, res, next){
	// req.body = {
	// 	open_id: 'wx34534534', // 浇水人open_id,
	// 	t_open_id: 'wx34534534', // 被浇水人open_id
	// };
	// var result = {response_code: 1, show_err: '浇水成功'};
	// res.send(result);
	req.body.act = 'water';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

// 获取成长记录
exports.get_growth_log = function(req, res, next) {
	// req.body = {
	// 	open_id: '',
	// 	page: 1, // 记录的页码
	// 	page_count: 5, // 每页的记录条数

	// }

	// var result = {
	// 	response_code: 1, 
	// 	show_err: '获取成功', 
	// 	data: {
	// 		log_list:[
	// 			{
	// 				nick_name: '阿尔伯特', // 昵称
	// 				opend_id: 'wx34534534', // 微信open_id
	// 				info: '成功浇水1次', // 记录的信息
	// 				date_time: '2017-3-11 23:55', // 记录产生时间
	// 			},
	// 			{
	// 				nick_name: '阿尔伯特', // 昵称
	// 				opend_id: 'wx34534534', // 微信open_id
	// 				info: '成功收获果实1颗', // 记录的信息
	// 				date_time: '2017-3-11 23:55', // 记录产生时间
	// 			},
	// 			{
	// 				nick_name: '阿尔伯特', // 昵称
	// 				opend_id: 'wx34534534', // 微信open_id
	// 				info: '成功浇水1次', // 记录的信息
	// 				date_time: '2017-3-11 23:55', // 记录产生时间
	// 			},
	// 		]
	// 	}
	// }
	req.body.act = 'get_growth_log';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

// 获取用户果子
exports.get_fruit_list = function(req, res, next) {
	// req.body = {
	// 	open_id: '' // open_id
	// };
	// var result = {response_code: 1, show_err: '获取果子成功！', data: {
	// 	fruits: [
	// 		{
	// 			index: 1, // 果子编号
	// 			watered_count: 1, // 已浇水次数
	// 			total_required_water_count: 1, //总共需要浇水几次 
	// 			is_opened: 0, // 是否打开果子(0-未打开, 1-已打开)
	// 		},
	// 		{
	// 			index: 2, // 果子编号
	// 			watered_count: 2, // 已浇水次数
	// 			total_required_water_count: 2, //总共需要浇水几次 
	// 			is_opened: 0, // 是否打开果子(0-未打开, 1-已打开)
	// 		},
	// 		{
	// 			index: 3, // 果子编号
	// 			watered_count: 3, // 浇水次数
	// 			total_required_water_count: 4, //总共需要浇水几次 
	// 			is_opened: 0, // 是否打开果子(0-未打开, 1-已打开)
	// 		}
	// 	]
	// }};

	// res.send(result);
	req.body.act = 'get_fruit_list';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}
// 更新果子
// exports.updateFruitStatus = function(req, res, next) {
// 	req.body = {
// 		open_id: '234534534', // 用户open_id
// 		index: 1, // 果子编号
// 		watered_count: 2, //
		
// 	};
// 	var result = {response_code: 1, show_err:'更新成功'};
// }

// 打开果子
exports.open_fruit = function(req, res, next) {
	// req.body = {
	// 	open_id: 'wx25434534534', // 微信open_id,
	// 	fruit_index: 2, // 果子编号
	// };

	// var result = {response_code: 1, show_err: '打开成功'};
	// res.send(result);
	req.body.act = 'open_fruit';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

// 获取礼品记录
exports.get_gift_log = function(req, res, next) {
	// req.body = {
	// 	open_id: '', // open_id
	// 	page: 1, // 记录的页码
	// 	page_count: 5, // 每页的记录条数

	// }

	// var result = {
	// 	response_code: 1, 
	// 	show_err: '获取成功', 
	// 	data: {
	// 		log_list:[
	// 			{
	// 				id: 2, // 记录的id 
	// 				info: '恭喜你获取0.5元红包', // 记录的信息
	// 				is_received: 0, // 是否已领取(0-未领取, 1-已领取, 2-已送出)
	// 			},
	// 			{
	// 				id: 10, // 记录的id 
	// 				info: '恭喜你获取0.5元红包', // 记录的信息
	// 				is_received: 0, // 是否已领取(0-未领取, 1-已领取, 2-已送出)
	// 			},
	// 			{
	// 				id: 22, // 记录的id 
	// 				info: '恭喜你获取0.5元红包', // 记录的信息
	// 				is_received: 0, // 是否已领取(0-未领取, 1-已领取, 2-已送出)
	// 			},
	// 		]
	// 	}
	// }

	// res.send(result);

	req.body.act = 'get_gift_log';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});

}

// 领取礼品
exports.recieve_gift = function(req, res, next) {
	// req.body = {
	// 	id: 234 //礼品记录的id
	// }

	// var result = {response_code: 1, show_err: '打开成功'}

	// res.send(result);
	req.body.act = 'recieve_gift';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

// 领取好友礼品
exports.recieve_friend_gift = function(req, res, next) {
	// req.body = {
	// 	id: 3345, // 礼品id
	// }

	// var result = {response_code: 1, show_err: '领取成功'}

	// res.send(result);
	req.body.act = 'recieve_friend_gift';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

exports.get_gift_list = function(req, res, next) {
	req.body.act = 'get_gift_list';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}

exports.plant_tree = function(req, res, next) {
	req.body.act = 'plant_tree';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}	


exports.send_captcha = function(req, res, next) {
	req.body.act = 'send_captcha';
	api_post.normal_post(req.body,function(ret){
		res.send(ret);
	});
}	






