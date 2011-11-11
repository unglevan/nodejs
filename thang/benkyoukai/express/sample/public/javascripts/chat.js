$(function(){
	clear();
	
	// server and connection
	
	var socket = io.connect("ws://localhost");
	//message recieve
	
	socket.on('connect', function(){
		console.log("connected");
	});
	
	socket.on('message', function(message){
		// #logs html id="logs"
		$("<div>").text('> ' + message).prependTo("#logs");
	});
	
	//send action when push on send button
	// new submit nut send
	$("#send").submit( function(){
		if( $("#message").val()){
			socket.send($("#message").val());
		}
		
		clear();
		return false;
	});
	
	// clear message input text
	function clear(){
		$("#message").val('').focus();
	}
});