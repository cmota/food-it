var vendorDeps = (require('wiredep')({dependencies: true,devDependencies: true}));

var refactorPath = path=> path.replace(/.*\\src(\\.*?\\)?/,"");

vendorDeps.js   = (vendorDeps.js  ||[]).map(refactorPath);
vendorDeps.css  = (vendorDeps.css ||[]).map(refactorPath);
vendorDeps.less = (vendorDeps.less||[]).map(refactorPath);
vendorDeps.scss = (vendorDeps.scss||[]).map(refactorPath);

module.exports = {
    vendor:{
        files:[
            {
                expand  : true,
                cwd     : "src/bower_components/",
                src     : vendorDeps.css,
                dest    : ".tmp/bower_components/"
            },
            {
                expand  : true,
                cwd     : "src/bower_components/",
                src     : vendorDeps.js,
                dest    : ".tmp/bower_components/"
            },
            {
                expand  : true,
                cwd     : "src/bower_components/",
                src     : ["**/*.eot","**/*.svg","**/*.ttf","**/*.woff","**/*.woff2"],
                dest    : ".tmp/bower_components/"
            }
        ]
    },
    build:{
        files:[
            {
                expand: true,
                cwd : "src/assets/css/",
                src : "**/*.min.css",
                dest: ".tmp/assets/css/"
            },
            {
                expand: true,
                cwd : "src/assets/js/",
                src : "**/*.js",
                dest: ".tmp/assets/js/"
            },
            {
                expand: true,
                dot: true,
                cwd: "src/assets/img/",
                src: "**/*",
                dest: ".tmp/assets/img/"
            },
            {
                expand: true,
                cwd: "src/assets/fonts/",
                src: "**/*",
                dest:".tmp/assets/fonts/"
            },
            {
                expand: true,
                cwd: "src/",
                src: "**/*.html",
                dest: ".tmp/"
            }
        ]
    },
    dist:{
        files:[
            {
                expand  : true,
                cwd     : ".tmp/bower_components/",
                src     : "**/*",
                dest    : "dist/bower_components/"
            },
            {
                expand: true,
                cwd : ".tmp/assets/",
                src : "**/*",
                dest: "dist/assets/"
            },
            {
                expand: true,
                cwd: ".tmp/",
                src: "**/*.html",
                dest: "dist/"
            }
        ]
    }
};