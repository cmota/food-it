module.exports = {
    options:{
        sourceMap:true
    },
    build: {

        files: {
            ".tmp/assets/css/appStyle.css":["src/**/*.css","!src/assets/css/**/*"]
        }
    },
    dist: {
        files: [{
            expand  : true,
            cwd     : "src/assets/css/",
            src     : ['*.css', '!*.min.css'],
            dest    : ".tmp/assets/css/",
            ext     : '.min.css'
        }]
    }
};