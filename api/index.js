
exports.index = function(req, res) {
	var action = req.body.action;
	var money = req.body.money;

	var result = {status: 1, data: {}};
	
	res.send(result);

}