var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    Config = require("./config");

/*
 * 启动服务器
 */
gulp.task('serve', function () {

    return Config.gulpVerifyArgumentName(process, "serve", "project", function (argv) {
        var baseDir = "./dest/dev/#project#/".replace("#project#", argv);

        browserSync.init({
            port: Config.PORT.DEV_PORT,
            startPath: "/",
            browser: ["chromium"],
            server: {
                baseDir: baseDir,
                middleware: function (req, res, next) {
                    // var reqUrl = req.url; 
                    next();
                }
            }

        });
    }); 

});

/*
 * 启动服务器
 */
gulp.task('serve:release', function () {

    return Config.gulpVerifyArgumentName(process, "serve", "project", function (argv) {
        var baseDir = "./dest/release/#project#/".replace("#project#", argv);

        browserSync.init({
            port: Config.PORT.DEV_PORT,
            startPath: "/",
            browser: ["chromium"],
            server: {
                baseDir: baseDir,
                middleware: function (req, res, next) {
                    // var reqUrl = req.url; 
                    next();
                }
            }

        });
    }); 

});
