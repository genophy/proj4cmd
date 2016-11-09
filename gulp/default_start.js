var gulp = require("gulp"),
	Config = require("./config");
	
/*
 *  默认执行
 * 	command:	gulp --project=<projectname> 
 *  
 */
gulp.task("default_start",["scss","less","tsc","webpack","img","html","cmpt3rd"],function(){
});


/*
 *  默认执行(release)
 * 	command:	gulp --project=<projectname> 
 *  
 */
gulp.task("default_start:release",["scss:release","less:release","tsc","webpack:release","img:release","html:release","cmpt3rd:release"],function(){
});
 