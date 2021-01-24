module.exports = {
    devServer: {
        open: true,
        port: 8080,
        hotOnly: true, // 热更新
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
}