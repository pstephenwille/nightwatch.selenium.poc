var gulp = require('gulp');

gulp.task('runDocker', function(){
    'use strict';
    /*
    docker run -d -e tags=gulptask0$i -v /Users/stephenwille/Projects/nightwatch.selenium.poc:/home/seluser swille/chromedebug  /start.xvfb;
 */
    var isWizard = "docker run -d -e tags=wizard "/
        "-v /Users/stephenwille/Projects/nightwatch.selenium.poc:/home/seluser "/
        "ewe/ls-automation /start.xvfb"
    exec();
});
