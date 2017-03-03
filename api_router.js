var express = require('express');
var index = require('./api/index');

var router = express.Router();


router.post('/', index.index);
// home page
router.post('/get_user_info', index.get_user_info);
router.post('/is_user_exist', index.is_user_exist);

router.post('/is_new_user', index.is_new_user);
router.post('/register', index.register);
router.post('/water', index.water);
router.post('/get_growth_log', index.get_growth_log);
router.post('/get_fruit_list', index.get_fruit_list);
router.post('/open_fruit', index.open_fruit);
router.post('/get_gift_log', index.get_gift_log);
router.post('/recieve_gift', index.recieve_gift);
router.post('/recieve_friend_gift', index.recieve_friend_gift);
router.post('/get_gift_list', index.get_gift_list);

module.exports = router;