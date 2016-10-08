var globby = require('globby');
var appFiles = globby.sync(["src/**/*.js","!src/**/*.spec.js","!**/bower_components/**/*"],{nosort:true});
module.exports = {
    angular : {
        options: {
            sourceMap: true,
            banner  : "'use strict';\n",// Replace all 'use strict' statements in the code with a single one at the top
            process : function (src, filepath) {
                return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
            }
        },
        files:[
            {
                src     : appFiles,
                dest    : ".tmp/app.js"
            }
        ]
    }
};