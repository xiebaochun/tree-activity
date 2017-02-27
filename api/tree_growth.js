exports.getGrowthLog = function(req, res, next) {
	req.body = {
		open_id: '',
		page: 1, // 记录的页码
		page_count: 5, // 每页的记录条数

	}

	var result = {
		response_code: 1, 
		show_err: '获取成功', 
		data: {
			log_list:[
				{
					nick_name: '阿尔伯特', // 昵称
					opend_id: 'wx34534534', // 微信open_id
					info: '成功浇水1次', // 记录的信息
					date_time: '2017-3-11 23:55', // 记录产生时间
				},
				{
					nick_name: '阿尔伯特', // 昵称
					opend_id: 'wx34534534', // 微信open_id
					info: '成功收获果实1颗', // 记录的信息
					date_time: '2017-3-11 23:55', // 记录产生时间
				},
				{
					nick_name: '阿尔伯特', // 昵称
					opend_id: 'wx34534534', // 微信open_id
					info: '成功浇水1次', // 记录的信息
					date_time: '2017-3-11 23:55', // 记录产生时间
				},
			]
		}
	}
}