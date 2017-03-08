// 1.获取用户信息
{
	url: 'get_user_info',
	method: 'post',
	post_data: {
		open_id: 'wx123456' // (必填)微信open_id
		share_user_id: 'wx123456' // (选填)微信open_id
		avatar_url: '',
		nick_name: ''
	},
	result:{
		response_code: '1',  // (0-失败,1-成功) 
		show_err: "用户已存在！",  // 反馈信息
		user_info: {
			is_received_tree: 0, //是否领取并种下了小树(0-未领取, 1-未领取)
			watering_able_count: 1, // 我的可浇水次数
			watered_count: 0, //小树已被浇水次数
			is_binded_mobile: 0, // 是否绑定了手机(0-未绑定, 1-已绑定)
		}
	}
}

//注：如果用户不存在，则自动创建一个用户，并返回用户信息


// 2.创建用户
// {
// 	url: 'create_user',
// 	method: 'post',
// 	post_data: {

// 	},
// 	result: {
// 		response_code: '1',  // (0-失败,1-成功) 
// 		show_err: "创建用户成功！",  // 反馈信息
// 	}

// }


// 3.是否是新用户
{
	url: 'is_new_user',
	method: 'post',
	post_data: {
		mobile: '13083951288', // (必填)用户手机号码
		captcha：'1234' ,//  (必填)验证码
		user_id: '1234567'   // (必填)用户id
		
	},
	result: {
		response_code: '1',
		show_err: '注册成功！',
		data: {
			is_new: 0, // (0-就用户, 1-新用户)
			user_mark: 2, // (1-借款用户，2-理财用户)
			bonus_success : 1 //(0-发放优惠券失败,1-发放优惠券成功)
		}
	}

}

// 4.注册
{
	url: 'register',
	method: 'post',
	post_data: {
		mobile: '13083951288', // (必填) 用户手机号码
		captcha: 'sgsd'        // (必填) 手机验证码
	},
	result: {
		response_code: '1',
		show_error: '注册成功！',
	}
}

// 5.浇水
{
	url: 'water',
	method: 'post',
	post_data: {
		user_id: 'wx123456', //  (必填)浇水人id
		t_user_id: 'wx234567', // (必填)被浇水人id
		fruit_id: '1' // (必填)果子编号
	},
	result: {
		response_code: '1' 
		show_error: '浇水成功',
	}
}

// 6.获取成长记录
{
	url: 'get_growth_log',
	method: 'post',
	post_data: {
		open_id: 'wx234567',//(必填)
		page: 1, // (必填)页码
		page_count: 5 // (必填)每页记录数
	},
	result: {
		response_code: 1, 
		show_err: '获取成功', 
		data: {
			log_list:[
				{
					nick_name: '阿尔伯特', // 昵称
					avator: 'http://xxxx.jpg' // 微信头像
					opend_id: 'wx34534534', // 微信open_id
					info: '成功浇水1次', // 记录的信息
					date_time: '2017-3-11 23:55', // 记录产生时间
				},
				{
					nick_name: '阿尔伯特', // 昵称
					avator: 'http://xxxx.jpg' // 微信头像
					opend_id: 'wx34534534', // 微信open_id
					info: '成功收获果实1颗', // 记录的信息
					date_time: '2017-3-11 23:55', // 记录产生时间
				},
				{
					nick_name: '阿尔伯特', // 昵称
					avator: 'http://xxxx.jpg' // 微信头像
					opend_id: 'wx34534534', // 微信open_id
					info: '成功浇水1次', // 记录的信息
					date_time: '2017-3-11 23:55', // 记录产生时间
				},
			]
		}
	}

}

// 7.获取果子列表
{
	url: 'get_fruit_list',
	method: 'post',
	post_data: {
		open_id: 'wx123456' //(必填)
	},
	result: {
		response_code: 1, show_err: '获取果子成功！',
		data: {
			fruits: [
				{
					index: 1, // 果子编号
					watered_count: 1, // 已浇水次数
					total_required_water_count: 1, //总共需要浇水几次 
					is_opened: 0, // 是否打开果子(0-未打开, 1-已打开)
				},
				{
					index: 2, // 果子编号
					watered_count: 2, // 已浇水次数
					total_required_water_count: 2, //总共需要浇水几次 
					is_opened: 0, // 是否打开果子(0-未打开, 1-已打开)
				},
				{
					index: 3, // 果子编号
					watered_count: 3, // 浇水次数
					total_required_water_count: 4, //总共需要浇水几次 
					is_opened: 0, // 是否打开果子(0-未打开, 1-已打开)
				}
			]
		}
	}
}

// 8.打开果子获取获取礼品
{
	url: 'open_fruit',
	method: 'post',
	post_data: {
		user_id: 'wx1234567', // (必填)
		fruit_index: 2, // (必填)果子编号
	},
	result: {
		response_code: 1,
		show_err: ''
		data:{
			gift_type: 1,  // 礼品类型(0-优惠券,1-现金红包,2,财神券)
			gift_value: 500, // 礼品价值 
		}
	}
}

// 9.获取礼品记录
{
	url: 'get_gift_log',
	method: 'post',
	post_data: {
		open_id: 'wx1234567',
		page: 1, // 记录的页码
		page_count: 5 //每页条数
	},
	result:{
		response_code: 1, 
		show_err: '获取成功', 
		data: {
			log_list:[
				{
					id: 2, // 记录的id 
					info: '恭喜你获取0.5元红包', // 记录的信息
					is_received: 0, // 是否已领取(0-未领取, 1-已领取, 2-已送出)
				},
				{
					id: 10, // 记录的id 
					info: '恭喜你获取0.5元红包', // 记录的信息
					is_received: 0, // 是否已领取(0-未领取, 1-已领取, 2-已送出)
				},
				{
					id: 22, // 记录的id 
					info: '恭喜你获取0.5元红包', // 记录的信息
					is_received: 0, // 是否已领取(0-未领取, 1-已领取, 2-已送出)
				},
			]
		}
	}
}


// 10.领取礼品
{
	url: 'recieve_gift',
	method: 'post',
	post_data: {
		id: 12 // (必填)礼品id
		user_id:1234 //(必填)用户id
		f_user_id:1234 //(选填)好友id 
	},
	result: {
		response_code: 1, 
		show_err: '领取成功'
	}
}

//11.领取好友礼品
// {
// 	url: 'recieve_friend_gift',
// 	post_data:{
// 		id: 224 // (必填)礼品id
// 		m_open_id: 'wx123456', // 我的open_id
// 		f_open_id: 'wx12456' // (必填) 好友open_id
// 	},
// 	result:{
// 		response_code: 1, 
// 		show_err: '领取成功'
// 	}
// }

// 12.获取礼品列表
{
	url: 'get_gift_list',
	method: 'post',
	post_data: {
		open_id: 'wx123456', //(必填)
	},
	result:{
		response_code: 1, 
		show_err: '获取成功',
		data: {
			gift_list:[
				{
					id: 12, // 礼品id
					is_received: 0 // 是否领取(0-未领取, 1-已领取)
				},
				{
					id: 12, // 礼品id
					is_received: 0 // 是否领取(0-未领取, 1-已领取)
				}
			]
		}
	}
}

// 13.种树
{
	url: 'plant_tree',
	method: 'post',
	post_data: {
		user_id: 123456, //(必填)
	},
	result:{
		response_code: 1,
		show_err: '种植成功',
	}
}

// 14.发送验证码
{
	url: 'send_captcha',
	method: 'post',
	post_data: {
		mobile: '12345678', //(必填)
	},
	result:{
		response_code: 0,
		show_err: '手机号码不能为空'
	}
}

//好友是否有浇过水
{
	url: 'has_water',
	method: 'post',
	post_data: {
		user_id: 123456, //用户id
		t_user_id: 123456 //被浇水人id
	},
	result:{
		response_code:1,
		show_err:'已浇过水',
		data: {
			has_water:1
		}
	}
}


//查看礼品
{
	url: 'get_gift',
	method: 'post',
	post_data: {
		gift_id: 123456, //(必填)
	},
	result:{
	
		response_code: 1,
		show_err: '查看成功',
		data: {
			amount: 1,//礼品价值或数量
			name:'xx虚拟礼品',//礼品名称
			type_id: 5, //礼品类型
			can_send：1 //可否赠送
		}
	}
}


//是否有未领取礼品
{
	url: 'has_gift',
	method: 'post',
	post_data: {
		user_id: 123456 //用户id
	},
	result:{
		response_code:1,
		show_err:'有礼品未领取',
		data: {
			has_gift:1
		}
	}
}

is_user_exist open_id

//引导页
has_water_guide 参数user_id

//随机位置
position