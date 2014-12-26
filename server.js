/* global console */
var path = require('path');
var express = require('express');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Moonboots = require('moonboots-express');
var sMoonboots = require('moonboots-static');
var compress = require('compression');
var config = require('getconfig');
var semiStatic = require('semi-static');
var serveStatic = require('serve-static');
var stylizer = require('stylizer');
var templatizer = require('templatizer');
var app = express();

// a little helper for fixing paths for various environments
var fixPath = function (pathString) {
    return path.resolve(path.normalize(pathString));
};


// -----------------
// Configure express
// -----------------
app.use(compress());
app.use(serveStatic(fixPath('public')));

// we only want to expose tests in dev
if (config.isDev) {
    app.use(serveStatic(fixPath('test/assets')));
    app.use(serveStatic(fixPath('test/spacemonkey')));
}

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// in order to test this with spacemonkey we need frames
if (!config.isDev) {
    app.use(helmet.xframe());
}
app.use(helmet.xssFilter());
app.use(helmet.nosniff());

app.set('view engine', 'jade');


// -----------------
// Set up our little demo API
// -----------------
var api = require('./fakeApi');
app.get('/api/products', api.list);
// app.get('/api/products/:id', api.get);
app.put('/api/request-collection/:id', api.request);

// -----------------
// Enable the functional test site in development
// -----------------
if (config.isDev) {
    app.get('/test*', semiStatic({
        folderPath: fixPath('test'),
        root: '/test'
    }));
}


// -----------------
// Set our client config cookie
// -----------------
app.use(function (req, res, next) {
    res.cookie('config', JSON.stringify(config.client));
    next();
});


// ---------------------------------------------------
// Configure Moonboots to serve our client application
// ---------------------------------------------------
new Moonboots({
    moonboots: {
        jsFileName: 'Dispense',
        cssFileName: 'Dispense',
        main: fixPath('client/app.js'),
        developmentMode: config.isDev,
        libraries: [
        ],
        stylesheets: [
            fixPath('public/css/bootstrap.css'),
            fixPath('public/css/app.css')
        ],
        browserify: {
            debug: true
        },
        beforeBuildJS: function () {
            // This re-builds our template files from jade each time the app's main
            // js file is requested. Which means you can seamlessly change jade and
            // refresh in your browser to get new templates.
            if (config.isDev) {
                templatizer(fixPath('templates'), fixPath('client/templates.js'));
            }
        },
        beforeBuildCSS: function (done) {
            // This re-builds css from stylus each time the app's main
            // css file is requested. Which means you can seamlessly change stylus files
            // and see new styles on refresh.
            if (config.isDev) {
                stylizer({
                    infile: fixPath('public/css/app.styl'),
                    outfile: fixPath('public/css/app.css'),
                    development: true
                }, done);
            } else {
                done();
            }
        }
    },
    server: app
});

// var moonboots = new sMoonboots({
//     moonboots: {
//         jsFileName: 'Dispense',
//         cssFileName: 'Dispense',
//         main: fixPath('client/app.js'),
//         developmentMode: config.isDev,
//         libraries: [
//         ],
//         stylesheets: [
//             fixPath('public/css/bootstrap.css'),
//             fixPath('public/css/app.css')
//         ],
//         browserify: {
//             debug: true
//         },
//         beforeBuildJS: function () {
//             // This re-builds our template files from jade each time the app's main
//             // js file is requested. Which means you can seamlessly change jade and
//             // refresh in your browser to get new templates.
//             if (config.isDev) {
//                 templatizer(fixPath('templates'), fixPath('client/templates.js'));
//             }
//         },
//         beforeBuildCSS: function (done) {
//             // This re-builds css from stylus each time the app's main
//             // css file is requested. Which means you can seamlessly change stylus files
//             // and see new styles on refresh.
//             if (config.isDev) {
//                 stylizer({
//                     infile: fixPath('public/css/app.styl'),
//                     outfile: fixPath('public/css/app.css'),
//                     development: true
//                 }, done);
//             } else {
//                 done();
//             }
//         }
//     },
//     // Contents from the public directory
//     // will be copied to the target directory
//     // public: __dirname + '/public',
//     // Directory to build files into
//     directory: __dirname + '/_build',
//     // Log build items
//     verbose: true
// });

// moonboots.on('ready', function (err) {
//     if (err) {
//         // Oh no something went wrong
//     } else {
//         // Yay, we built our files!
//     }
// });


// listen for incoming http requests on the port as specified in our config
app.listen(config.http.port);
console.log('Dispense is running at: http://localhost:' + config.http.port + ' Yep. That\'s pretty awesome.');
