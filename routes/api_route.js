var keystone = require('keystone'),
	importRoutes = keystone.importer(__dirname);

var routes = {
	api: importRoutes('./api')
};

exports.route = function(app) {
	// API
	app.post('/gxb/api/user_info/user_regist', routes.api.user_info.user_regist);
	app.post('/gxb/api/user_info/user_delete', routes.api.user_info.user_delete);
	app.post('/gxb/api/user_info/user_edit', routes.api.user_info.user_edit);
}