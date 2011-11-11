var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    setInterval(function(){
	res.write('Hello\r\n');
    }, 500);
    process.on('SIGINT',function(){
	res.end('bye\r\n');
	process.exit(0);
    });
});

server.listen(8000);
