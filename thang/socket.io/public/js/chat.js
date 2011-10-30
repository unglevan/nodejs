$(function(){
	clear();
	
	// server and connection
	
	var socket = io.connect("ws://localhost");
	//message recieve
	
	socket.on('connect', function(){
		console.log("connected");
	});
	
	socket.on('message', function(message){
		$("<div>").text('> ' + message).prependTo("#logs");
	});
	
	//send action when push on send button
	
	$("#send").submit( function(){
		if( $("#message").val()){
			socket.send($("#message").val());
		}
		
		clear();
		return false;
	});
	
	
	function clear(){
		$("#message").val('').focus();
	}
});