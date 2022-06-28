<template>
  <div>
    <a v-bind:href="href">百度</a>
    <img v-bind:src="img" alt="">
    <img v-bind:src="imgLocalurl" alt="">
    <img :src="imgLocalurl" alt="">
    <div>
      <img src="./assets/logo.png" alt="">
    </div>
  </div>
</template>

<script>
import imgurl from './assets/logo.png'
export default {
  data() {
    return {
      href: 'https://www.baidu.com',
      img: 'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      imgLocalurl: imgurl,
    }
  },
}
</script>

<style>
</style>
