var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app = module.exports = loopback();

boot(app, __dirname);

/////////////////////////////////
// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
// app.use(loopback.static(path.resolve(__dirname, '../client')));

var dispenseApp     = path.resolve(__dirname, '../client/dispenseApp');
var dispenseManager = path.resolve(__dirname, '../client/dispenseManager');

app.use(loopback.static(dispenseApp));
app.use(loopback.static(dispenseManager));

<<<<<<< HEAD
=======
app.get('/dispenseApp*', function(req, res){
   res.sendFile(dispenseApp + '/index.html') 
})

app.get('/dispenseManager*', function(req, res){
   res.sendFile(dispenseManager + '/index.html') 
})

>>>>>>> origin/testProd
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
