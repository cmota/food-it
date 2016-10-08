module.exports = {
    dev: {
        options :{
            basePath:"src"
        },
        files: {
            'src/index.html'        : 'src/index.html',
        }
    },
    dist: {
        options :{
            basePath:"dist"
        },
        files: {
            'dist/index.html'        : 'src/index.html'
        }
    }
};