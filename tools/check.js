var exec = require('child_process').exec;

check();

function check() {
	var last = exec('lsof -i:3000');
	last.on('exit', function(code) {
		if(code != '0') {
			console.log('服务已关闭，正在重启...');
			run();
		}else{
			console.log('服务正常运行中');
		}
	});
	setTimeout(check, 5000);
}

function run() {
	var last = exec('node ../index.js');
	last.on('exit', function(code) {
		if(code == '0') {
			console.log('服务重启成功！');
		}else{
			console.log('重启失败！');
		}
	});
}

// var last = exec('node ../index.js');
// last.on('exit', function(code) {
// 	if(code == '0') {
// 		console.log('服务重启成功！');
// 	}else{
// 		console.log('重启失败！');
// 	}
// });