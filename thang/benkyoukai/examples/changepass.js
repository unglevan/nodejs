var stat = require('fs').stat;

stat('/etc/passwd', function(err, s){
	if( err) throw err;
	console.log('modified: %s', s.mtime);	
});
