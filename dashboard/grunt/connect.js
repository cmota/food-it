var modRewrite = require('connect-modrewrite');
var serverPort = 3000;
module.exports = {
    localServer: {
        options: {
            open: true,
            port: serverPort,
            base: "src",
            middleware: function (connect, options, middlewares) {
                middlewares.unshift(modRewrite(['!\\.html|\\.less|\\.js|\\.svg|\\.css|\\.png|\\.woff|\\.woff2|\\.ttf$ /index.html [L]']));
                return middlewares;
            }
        }
    }
};