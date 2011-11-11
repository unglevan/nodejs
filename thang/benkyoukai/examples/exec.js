
exec = require('child_process').exec;

exec('ls /', function( err, output){
    if(err) throw err;
    console.log(output);
});
