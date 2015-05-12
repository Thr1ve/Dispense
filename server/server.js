var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app = module.exports = loopback();

// TODO: configure webstorm to sync with webserver https://www.jetbrains.com/webstorm/help/working-with-web-servers-copying-files.html
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

/////////////////////////////////
// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
// app.use(loopback.static(path.resolve(__dirname, '../client')));

var dispenseApp     = path.resolve(__dirname, '../client/dispenseApp');
var dispenseManager = path.resolve(__dirname, '../client/dispenseManager');

//use browserify to directly bundle and serve the already bundled files?
app.use(loopback.static(dispenseApp));
app.use(loopback.static(dispenseManager));

app.get('/dispenseApp*', function(req, res){
   res.sendFile(dispenseApp + '/index.html') 
})

app.get('/dispenseManager*', function(req, res){
   res.sendFile(dispenseManager + '/index.html') 
})
// app.use('/dispenseManager', loopback.static(dispenseManager));
    // express = require('express'),
    // parentApp = express();


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
