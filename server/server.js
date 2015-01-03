var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var Moonboots = require('moonboots-express');
var templatizer = require('templatizer');
var stylizer = require('stylizer');
var app = module.exports = loopback();

var fixPath = function (pathString) {
    return path.resolve(path.normalize(pathString));
};
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

/////////////////////////////////
// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
// app.use(loopback.static(path.resolve(__dirname, '../client')));

var landing = require('path').resolve(__dirname, '../client/landing');

app.use(loopback.static(landing));

////////////////////////////////

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
