var lookup = require('dnsbl-lookup');
var msg_api = require('../msg_api');

var links = msg_api.links;

var i = 0;
var length = links.length;
look(links[0].url,callback);
function callback(){
	i++;
	if(i < (length-1)){
		look(links[i].url,callback);	
	}
}

function look(domain,callback) {
	console.log(domain);
	var uribl= new lookup.uribl('xiaoshushidai.com');

	uribl.on('error',function(error,blocklist){
		console.log(blocklist);
		callback();
	});
	uribl.on('data',function(result,blocklist){
		console.log(result);
		//console.log(blocklist);
		callback();
	});
	uribl.on('done', function(){
		console.log('......................................................');
	});
}
