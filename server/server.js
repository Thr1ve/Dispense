var loopback = require('loopback');
var ghost = require('ghost');
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

// var landing = require('path').resolve(__dirname, '../client/landing');

// app.use(loopback.static(landing));

var socketTest = require('path').resolve(__dirname, '../client/socketioTest');
app.use('/chat', loopback.static(socketTest));

    // express = require('express'),
    // parentApp = express();

ghost().then(function (ghostServer) {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    ghostServer.start(app);
});

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
  //app.start();
    app.io = require('socket.io')(app.start());
    app.io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('chat message', function(msg){
            console.log('message: ' + msg);
            app.io.emit('chat message', msg);
        });
        socket.on('new code', function(msg){
            console.log('message: ' + msg);
            app.io.emit('new code', msg);
        });
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });
}
