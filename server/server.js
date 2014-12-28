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

// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
// app.use(loopback.static(path.resolve(__dirname, '../client')));

var landing = require('path').resolve(__dirname, '../client/landing');

app.use(loopback.static(landing));

//********
//moonboots testing
//********

var moonboots = new Moonboots({
    moonboots: {
        appPath : '*/dispense',
        jsFileName: 'Dispense',
        cssFileName: 'Dispense',
        main: require('path')
            .resolve(__dirname, '../client/dispense/client/app.js'),
        developmentMode: true,
        libraries: [
        ],
        stylesheets: [
            fixPath('client/dispense/public/css/bootstrap.css'),
            fixPath('client/dispense/public/css/app.css')
        ],
        browserify: {
            debug: true
        },
        beforeBuildJS: function () {
            // This re-builds our template files from jade each time the app's main
            // js file is requested. Which means you can seamlessly change jade and
            // refresh in your browser to get new templates.

            // if (config.isDev) {
                templatizer(fixPath('client/dispense/templates'),
                    fixPath('client/dispense/client/templates.js'));
            // }
        },
        beforeBuildCSS: function (done) {
            // This re-builds css from stylus each time the app's main
            // css file is requested. Which means you can seamlessly change stylus files
            // and see new styles on refresh.

            // if (config.isDev) {
                stylizer({
                    infile: fixPath('client/dispense/public/css/app.styl'),
                    outfile: fixPath('client/dispense/public/css/app.css'),
                    development: true
                }, done);
            // } else {
                // done();
            // }
        }
    },
    server: app,
});




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
