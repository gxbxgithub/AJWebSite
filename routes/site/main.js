var keystone = require('keystone');

// 首页
exports = module.exports = function(req, res){
	var view = new keystone.View(req, res);
	view.render('index');
}

exports.go_blog = function(req, res){
	var view = new keystone.View(req, res);
	view.render('blog/index');
}