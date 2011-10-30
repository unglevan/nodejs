$(function(){
	clear();
	
	//server
	
	var ws = new WebSocket("ws://localhost/");
	
	ws.onopen = function(){
		console.log("Connected");
	};
	
	ws.onmessage = function( event){
		$("<div>").text("> " + event.data).prependTo("#logs");
		console.log(event.data);
	};
	
	$("#send").submit( function(){
		console.log("click");
		if( $("#message").val()){
			ws.send($("#message").val());
			console.log($("#message").val());
		}
		clear();
		return false;
	});
	
	function clear(){
		$("#message").val('').focus();
	};
	
});