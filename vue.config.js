const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'portfolio.test'
  },
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
})
