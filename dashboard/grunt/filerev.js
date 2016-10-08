module.exports = {
    options: {
        algorithm: 'md5',
        length: 8
    },
    css: {
        expand: true,
        cwd:".tmp/assets/css/",
        src: ['**/*.min.css'],
        dest:".tmp/assets/css/"
    },
    js: {
        expand: true,
        cwd:".tmp/assets/js/",
        src: ['**/*.min.js' ],
        dest:".tmp/assets/js/"
    }
};