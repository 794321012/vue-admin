module.exports = {
    devServer: {
        port: 8080,
        host: 'localhost',
        open: true
    },
    /* eslint-disable */
    chainWebpack(config) {
        config.plugin('define').tap(args => {
            args[0]['process.env'].VUE_APP_LOGOUT_URL = JSON.stringify(
                process.env.VUE_APP_LOGOUT_URL
            )
            console.log(args[0])
            return args
        })
    }
}
