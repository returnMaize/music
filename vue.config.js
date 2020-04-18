module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.qq.jsososo.com', //对应自己的接口
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}