var http = require('http'),
		path = require('path'),
		fs = require('fs');

http.createServer(function(req, res) {
	var filename = path.basename(req.url) || 'index.html',
			ext = path.extname(filename),
			localPath = __dirname + '/public/';

	if (ext === '.html') {
		localPath += filename;
		path.exists(localPath, function(exists) {
			if (exists) {
				getFile(localPath, res);
			} else {
				res.writeHead(404);
				res.end()
			}
		});
	}
}).listen(3000);

function getFile (localPath, res) {
	fs.readFile(localPath, function(err, content) {
		if (!err) {
			res.end(content);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}