const BASE_URL= process.env.NODE_ENV ==='procution'?'/vuetify':'/'

const path = require('path')

const resolve =dir=>path.join(__dirname,dir)

module.exports = {
  lintOnSave: false,
	publicPath:BASE_URL,
	runtimeCompiler: true,
  chainWebpack:config=>{
    config.resolve.alias.set('@',resolve('src'))
  },
  productionSourceMap:false,
  devServer:{
    proxy:'http://localhost:4000'
  },
  transpileDependencies: [
    'vuetify'
  ]
}
