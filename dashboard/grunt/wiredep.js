module.exports = {
    dist:{
        src: "src/index.html",
        options: {
            dependencies: true,
            devDependencies: false
        }
    },
    dev: {
        exclude:[/(jasmine)/],
        src: "src/index.html",
        options: {
            dependencies: true,
            devDependencies: true
        }
    },
    tests:{
        exclude:[],
        src: "src/SpecRunner.html",
        options: {
            dependencies: true,
            devDependencies: true
        }
    }
};