var http = require('http');

http.createServer(function(req, res) {
	var html = '<!DOCTYPE html>' +
						 '<html><head><title>Hello World</title></head>'+
						 '<body><h1>Hello, world!</h1></body></html>';

	res.writeHead(200, {
		"Content-Type": "text/html",
		"Content-Length": html.length
	});

	res.end(html);
}).listen(3000, "127.0.0.1");