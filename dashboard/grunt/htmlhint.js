module.exports = {
    index:{
        options: {
            "htmlhintrc": '.htmlhintrc',
            "doctype-first": true,
            "doctype-html5": true,
            "title-require": true,
            "style-disabled":true,
            "force":true
        },
        src: "src/index.html"
    },
    views: {
        options: {
            "htmlhintrc": '.htmlhintrc',
            "force":true
        },
        src : ["src/**/*.html","!**/bower_components/**/*"]
    }
};