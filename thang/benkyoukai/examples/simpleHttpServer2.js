
//simple http server
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello\r\n');
    
    setTimeout(function(){
	res.end('World\r\n');
    }, 20000);
});

server.listen(8000);
