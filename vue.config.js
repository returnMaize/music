module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://v1.itooi.cn/tencent', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}