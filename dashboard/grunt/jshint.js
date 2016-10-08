module.exports = {
    options: {
        jshintrc:true,
        reporter: require('jshint-stylish'),
        force:true
    },
    gruntfile: ['Gruntfile.js'],
    apps : [
        "src/**/*.js",
        "!src/**/*spec.js",
        "!**/bower_components/**/*",
        "src/assets/**/*.js"
    ]
};