<template>
  <div>
    <a v-bind:href="url">去百度</a>
    <img :src="imgUrl">
    <img :src="localImg">
  </div>
</template>

<script>
import imgObj from './assets/logo.png'
  export default {
    name: 'App',
    data() {
      return {
// - 语法：`v-bind:属性名="vue变量"`
// - 简写：`:属性名="vue变量"`
        url: 'https://www.baidu.com',
        imgUrl: 'https://img0.baidu.com/it/u=530426417,2082848644&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        localImg: imgObj
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>