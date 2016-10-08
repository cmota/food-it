module.exports = {
    build: {
        files: [{
            dot: true,
            src: ['.tmp','dist/{,*/}*','!dist/.git*']
        }]
    },
    tempFiles: [
        '.tmp/assets/**/*.js',
        '.tmp/assets/**/*.js.map',
        '!.tmp/assets/**/*.min.*.js',
        '!.tmp/assets/**/*.min.*.js.map',
        '.tmp/assets/**/*.css',
        '.tmp/assets/**/*.css.map',
        '!.tmp/assets/**/*.min.*.css',
        '!.tmp/assets/**/*.min.*.css.map'
    ]
};