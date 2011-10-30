var i = 1;
$(function(){
	
	//server
	var socket = io.connect("ws://localhost");
	
	//socket recieve new connection
	socket.on('connect', function(){
		console.log("new connection");
	});
	
	//client nhan message
	socket.on('message', function(message){
		$("#img").attr( "src", "/css/images/sapa" + message);
		console.log(message);
	});
	
	socket.on("mes", function( message){
		console.log(message + "naruhodo");
	});
	
	$("#send").submit( function(){
		console.log("send");
		socket.send(i);
		i = i + 1;
		i = i%3 +1;
		console.log( i);
		return false;
	});
	
	
});