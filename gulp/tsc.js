
var gulp = require("gulp"),
    Script = require("./script");

/*
 * 脚本编译
 * 
 * 将 *.app.ts *.app.coffee 等编译成为同目录下的*.app.js
 * 
 * 目前只支持 *.app.ts
 * 
 * 优先级 (最大级若存在且不为空文件，则只编译最大级别到 *.app.js。若*.app.js以上级别的文件都为空文件，则不进行编译 )
 * 
 * 
 * *.app.js <_ *.app.ts <_ *.app.coffee
 */
gulp.task("tsc",function(){
	return Script.tsc();
}); 