module.exports = {
	devServer: {
		proxy: {
			'/release': {
				target:
					'http://service-asolrbuq-1302998718.gz.apigw.tencentcs.com/release/',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/release': ''
				}
			}
		}
	}
}
