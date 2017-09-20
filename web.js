var keystone = require('keystone'),
    express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    http_tools = require('./lib/httpUtils');

keystone.init({
  
  'name': 'Keystone Demo',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': 'public',
  
  'views': 'templates/views',
  'view engine': 'html',  //模板引擎 
  'custom engine': require('ejs-mate'),
  
  'auto update': true,
  'mongo': 'mongodb://localhost:27017/keystone_demo',
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'admin',

  'port': 3002
});

require('./models');

// keystone.set('app', app);
// keystone.set('mongoose', mongoose);
keystone.set('routes', require('./routes'));
 
keystone.start();