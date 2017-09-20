var keystone = require('keystone'),
	importRoutes = keystone.importer(__dirname);

var routes = {
	site: importRoutes('./site')
};

exports.route = function(app) {
	// Main
	app.get('/', routes.site.main);
	app.get('/site_main/blog', routes.site.main.go_blog);

    // User
    app.post('/site_user/user_regist', routes.site.user.user_regist);
    app.post('/site_user/user_delete', routes.site.user.user_delete);
    app.post('/site_user/user_edit', routes.site.user.user_edit);
}