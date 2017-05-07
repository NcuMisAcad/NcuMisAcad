var server = require("./server");
var router = require("./router");
var handlers = require("./requestHandlers");

var req = {
	"/": handlers.start,
	"/start": handlers.start,
	"/send": handlers.send
};

// 先傳遞route物件 及 req requestHandler
server.start(router.route, req);