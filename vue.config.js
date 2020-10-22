module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://way.jd.com', //对应服务器地址
        changeOrigin: true, //允许跨域
        ws: true,
        pathRewrite: {
          '^/api': ''}
      },
      //查找用户名存不存在
      '/login_logup': {
        target: "http://csdcloud.cn:8081/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/login_logup': ''
        }
      },
    }
  }

}

