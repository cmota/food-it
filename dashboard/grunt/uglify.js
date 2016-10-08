module.exports = {
    angular: {
        options: {
            sourceMapIncludeSources: true,
            sourceMap: true
        },
        expand  : true,
        cwd     : ".tmp/assets",
        src     : ["**/*.js", "!**/*.min.js"],
        dest    : ".tmp/assets",
        ext     : '.min.js'
    }
};