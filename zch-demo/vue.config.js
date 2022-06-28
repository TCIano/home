const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 禁用代码检查
  devServer: {
    open: true,
    host: "localhost", // 更改IP 要加引号
    port: 8080, // 更改端口
  }
})
