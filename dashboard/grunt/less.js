module.exports = {
    dist:{
        options: {
            sourceMap   : true,
            compress    : true,
            cleancss    : true,
            report      : 'min'
        },
        ".tmp/assets/css/styleLess.css" : ["src/**/*.less","!**/bower_components/**/*"],
    }
};