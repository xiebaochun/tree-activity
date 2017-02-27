// 获取用户果子
exports.getFruits = function(req, res, next) {
	var result = {response_code: 1, show_err: '获取果子成功！', data: {
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
	}};

	res.send(result);
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
exports.openFruit = function(req, res, next) {
	req.body = {
		open_id: 'wx25434534534', // 微信open_id,
		fruit_index: 2, // 果子编号
	};

	var result = {response_code: 1, show_err: '打开成功'};
	res.send(result);
}