
var gulp = require("gulp"),
    Script = require("./script");

/*
 * 脚本编译
 * 
 * 将 *.app.scss 编译成为同目录下的*.app.css
 * 
 * 优先级 (最大级若存在且不为空文件，则只编译最大级别到 *.app.css。若*.app.js以上级别的文件都为空文件，则不进行编译 )
 * 
 * 
 * *.app.css <_ *.app.scss
 */
gulp.task("scss", function () {
	return Script.scss();
});


/*
 * 脚本编译(release)
 * 
 * 将 *.app.scss 编译成为同目录下的*.app.css
 * 
 * 优先级 (最大级若存在且不为空文件，则只编译最大级别到 *.app.css。若*.app.js以上级别的文件都为空文件，则不进行编译 )
 * 
 * 
 * *.app.css <_ *.app.scss
 */
gulp.task("scss:release", function () {
	return Script.scss_release();
}); 