
/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
app.get('/chat', routes.chat);


//server process

var io = require('socket.io').listen(app);

io.sockets.on('connection', function( socket){
	socket.on('message', function(message){
		io.sockets.send(message);
	});
});


// server listen
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
