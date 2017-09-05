var keystone = require('keystone'),
	importRoutes = keystone.importer(__dirname);

var routes = {
	pc: importRoutes('./pc')
};

exports.route = function(app) {
	// 首页
	app.get('/', routes.pc.pc_site);
}