/**
 * 
 * 如果前端应用和后端 API 服务器没有运行在同一个主机上
 * 需要在开发环境下将 API 请求代理到 API 服务器
 * 这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置
 * 
 */ 
module.exports ={
    devServer :{
        proxy :{
            '/api' :{
                target : 'http://39.97.33.178',
                changeOrigin:true
            }
        }
    }
}