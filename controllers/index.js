var http =require('http');
var querystring = require('querystring');

index = {
	home:	function(req, res, next) {
		  // var post_options = {
		  //     host: 'hisexy.vn',
		  //     path: '/',
		  //     method: 'POST'
		  //     };

		  // var post_req = http.request(post_options, function(res) {
		  // 	  	console.log("res");

		  // 	console.log(res);
		  //     res.setEncoding('utf8');
		  //     res.on('data', function (chunk) {
		  //         console.log('Response: ' + chunk);
		  //     });
		  // });

	setInterval(function(){
		http.get({
			  hostname: 'hisexy.vn',
			  path: '/',
			  agent: false  // create a new agent just for this one request
			}, (res) => {
				console.log(res);
			  // Do stuff with response
			});
		}, 1);
	res.send("hii hii");

	}

} 

module.exports = index;
