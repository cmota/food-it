module.exports = {
    options: {
        sourceMap: true,
        presets: ['es2015']
    },
    build: {
        files: {
            '.tmp/app.es5.js': '.tmp/app.js'
        }
    }
};