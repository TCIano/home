<template>
    <div>
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量" -->
    <a v-bind:href="url">点击去百度</a>
    <!-- 语法: :原生属性名="vue变量" -->
    <img :src="imgUrl" />
    <img :src="localImg">
  </div>
</template>

<script>
import Img from './assets/logo.png'
export default {
  name: 'VuecliDemo01',

  data() {
    return {
      url:'http://www.baidu.com',
      img:"http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
      localImg: Img
    };
  }
};
</script>
