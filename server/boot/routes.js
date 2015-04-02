var Moonboots = require('moonboots-express');
var templatizer = require('templatizer');
var stylizer = require('stylizer');
var path = require('path');

var fixPath = function (pathString) {
    return path.resolve(path.normalize(pathString));
};

module.exports = function(app) {
    console.log('we made it here');
    var dispenseManager = new Moonboots({
        server: app,
        appPath : '/dispenseManager*',
        moonboots: {
            jsFileName: 'DispenseManager',
            cssFileName: 'DispenseManager',
            main: require('path')
                .resolve(__dirname, '../../client/dispenseManager/client/app.js'),
            developmentMode: true,
            libraries: [
            ],
            stylesheets: [
                fixPath('client/dispenseManager/public/css/bootstrap.css'),
                fixPath('client/dispenseManager/public/css/app.css')
            ],
            browserify: {
                debug: true,
                transforms: [
                ]
            },
            beforeBuildJS: function () {
                // This re-builds our template files from jade each time the app's main
                // js file is requested. Which means you can seamlessly change jade and
                // refresh in your browser to get new templates.

                // if (config.isDev) {
                    templatizer(fixPath('client/dispenseManager/templates'),
                        fixPath('client/dispenseManager/client/templates.js'));
                // }
            },
            beforeBuildCSS: function (done) {
                // This re-builds css from stylus each time the app's main
                // css file is requested. Which means you can seamlessly change stylus files
                // and see new styles on refresh.

                // if (config.isDev) {
                    stylizer({
                        infile: fixPath('client/dispenseManager/public/css/app.styl'),
                        outfile: fixPath('client/dispenseManager/public/css/app.css'),
                        development: true
                        // development: false
                    }, done);
                // } else {
                    // done();
                // }
            }
        }
    });

    var dispenseApp = new Moonboots({
        server: app,
        appPath : '/dispenseApp*',
        moonboots: {
            jsFileName: 'DispenseApp',
            cssFileName: 'DispenseApp',
            main: require('path')
                .resolve(__dirname, '../../client/dispenseApp/client/app.js'),
            developmentMode: true,
            libraries: [
            ],
            stylesheets: [
                 fixPath('client/dispenseApp/public/css/app/main.css'),
            ],
            browserify: {
                debug: true,
                transforms: [
                    'reactify',
                    'babelify'
                ]
            },
            beforeBuildJS: function () {
                // This re-builds our template files from jade each time the app's main
                // js file is requested. Which means you can seamlessly change jade and
                // refresh in your browser to get new templates.

                // if (config.isDev) {
                    // templatizer(fixPath('client/dispenseApp/templates'),
                    //     fixPath('client/dispenseApp/client/templates.js'));
                // }
            },
            beforeBuildCSS: function (done) {
                // This re-builds css from stylus each time the app's main
                // css file is requested. Which means you can seamlessly change stylus files
                // and see new styles on refresh.

                // if (config.isDev) {
                    // stylizer({
                    //     infile: fixPath('client/dispenseApp/public/css/app.styl'),
                    //     outfile: fixPath('client/dispenseApp/public/css/app.css'),
                    //     development: true
                    //     // development: false
                    // }, done);
                // } else {
                    done();
                // }
            }

        }
    });
};
