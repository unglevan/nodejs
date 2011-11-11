
var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello\r\n');
	res.end('World\r\n');
});

server.listen(8000);
