var querystring = require('querystring');
//var mysql = require("./mysql");
var history = [ ]; //全域陣列來儲存訊息

function start(response, query) {
	console.log("Handler 'start' is started.");
	console.log("Query string is: " + query);
}

function send(response, query) {
	console.log("Handler 'send' is started.");
	console.log("Query string is: " + query);

	var parsedstring = querystring.parse(query);

	var obj = 
	{
		message: parsedstring.m,
		username: parsedstring.u,
		timestamp: (new Date()).getTime()
	};

	history.push(obj);

	//mysql.inputHistory(obj);
	
	
	for (var i = 0; i < history.length; i++) {
		console.log("[" + i + "]: " + history[i].message + " , "+ history[i].username + " , " + history[i].timestamp);
	}
}

exports.start = start;
exports.send = send;