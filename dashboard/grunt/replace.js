module.exports = {
    vendorRefs:{
        src : "dist/index.html",
        overwrite: true,
        replacements: [
            {
                from: /<.*rel="stylesheet\/less".*?\/>/gi,
                to: ""
            },
            {
                from: /<!--\s*remove\s*-->(\n|.)*<!--\s*\/remove\s*-->/gmi,
                to: ""
            }
        ]
    }
};