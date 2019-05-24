const config = require('./config')

module.exports = {
    devServer: {
        port: 8080,
        host: 'localhost',
        open: true,
        proxy: {
            [config.ROOT]: {
                target: config.PROXYROOT,
                changeOrigin: true,
                pathRewrite: {
                    [`^${config.ROOT}`]: ''
                },
                ws: false
            }
        }
    }
}
