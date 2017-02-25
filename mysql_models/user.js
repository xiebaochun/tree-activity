var config = require('../config');
var mysql      = require('mysql');
var connection;// = mysql.createConnection(config.mysql_conf);

var user = {
	findOne: function(data, cb) {
		//var id = data.id;
		var query = 'SELECT * FROM users';

		if(data.id){
			query = 'SELECT * FROM users WHERE user_id = '+ data.id +'';
		}

		if(data.name){
			query = 'SELECT * FROM users WHERE name = \''+ data.name +'\'';
		}
		console.log(query);
		connection = mysql.createConnection(config.mysql_conf);
		connection.connect();

		connection.query(query, function (error, results, fields) {
		  if (error) {
		  	cb(error, null);
		  	return;
		  	//throw error;
		  }
		  console.log('The result is:');
		  console.log(results);
		  console.log('The result type is:');
		  console.log(results[0]);
		  if(results[0]) {
		  	cb(0, results[0]);
		  }else{
		  	cb(0, null);
		  }
		});

		connection.end();
	},
	update: function(data, cb) {

	},
	updatePwd: function(data, cb) {
		var query = 'UPDATE users SET password = \''+ data.password +'\' WHERE user_id= ' + data.id;
		console.log('update pwd query:' + query);
		connection = mysql.createConnection(config.mysql_conf);
		connection.connect();
		connection.query(query, function (error, results, fields) {
		  if (error) {
		  	cb(error, null);
		  	return;
		  	//throw error;
		  }
		  console.log('The result is:');
		  console.log(results);
		  console.log('The fields is:');
		  console.log(fields);
		  cb(0, {result: true});
		});

		connection.end();
	}
}

exports.user = user;