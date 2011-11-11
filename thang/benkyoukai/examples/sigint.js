

setInterval(function(){
	console.log('hello\r\n');
}, 500);

process.on('SIGINT', function(){
	console.log('bye');
	process.exit(0);
});
