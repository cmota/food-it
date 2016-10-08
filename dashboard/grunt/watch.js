module.exports = {
    options: {
        livereload: true
    },
    html:{
        files: [
            "src/**/*.html"
        ],
        tasks: [ 'newer:htmlhint'],
        options: {
            spawn: false
        }
    },
    styles: {
        files: [
            "src/assets/**/*.css"
        ],
        tasks: [ 'includeSource'],
        options: {
            spawn: false
        }
    },
    js: {
        files: ["src/**/*.js"],
        tasks: [ 'includeSource'],
        options: {
            spawn: false
        }
    },
    grunt:{
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile'],
        options: {
            spawn: false
        }
    }
};