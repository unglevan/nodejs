exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.chat = function(req, res){
	res.render('chat', { title: 'web socket chat'})
};