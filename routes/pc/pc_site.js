var keystone = require('keystone');
var http_tools = require('../../lib/httpUtils');

// 首页
exports = module.exports = function(req, res){
	var view = new keystone.View(req, res);
	view.render('demo');
}