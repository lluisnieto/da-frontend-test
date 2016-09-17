var envConfig = require('./utils/env');

module.exports = function () {
    var root = '',
        src = root + './',
        config = root + 'config/',
        app = src + 'src/',

        assets = src + 'assets/',
        assetsPath = {
            styles: assets + 'css/',
            images: assets + 'images/'
        },
        index = app + 'index.html',
        build = {
            path: 'build/',
            app: 'build/app/',
            fonts: 'build/fonts',
            assetPath: 'build/assets/',
            assets: {
                lib: {
                    js: 'lib.js',
                    css: 'lib.css'
                }
            }
        },
        report = {
            path: 'report/'
        };

    /*var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: {
                DEBUG: false,
                ENV: 'production'
            }
        }
    };*/

    var gulpConfig = {
        root: root,
        config: config,
        src: src,
        app: app,

        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,

    }; //systemJs: systemJs

    if (envConfig.ENV === envConfig.ENVS.DEV)
    {
        var historyApiFallback = require('connect-history-api-fallback');
        var browserSync = {
            dev: {
                port: 3000,
                server: {
                    baseDir: './src/',
                    middleware: [historyApiFallback()],
                    routes: {
                        "/node_modules": "node_modules",
                        "/src": "src"
                    }
                },
                files: [
                    src + "index.html",
                    src + "systemjs.conf.js",
                    assetsPath.styles + "styles.css",
                    app + "**/*.css",
                    app + "**/*.html"
                ]
            },
            prod: {
                port: 3001,
                server: {
                    baseDir: './' + build.path,
                    middleware: [historyApiFallback()]
                }
            }
        };

        gulpConfig.browserSync = browserSync;
    }

    return gulpConfig;
};
