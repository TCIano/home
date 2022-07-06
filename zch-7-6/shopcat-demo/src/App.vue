<template>
  <div>
   <MyHeader title="购物车123" style="backgroundColor: aqua" color="#d93a49"></MyHeader>
   <div style="margin-top: 45px">
    <MyGoods v-for="item in list" :key="item.id" :obj="item"></MyGoods>
   </div>
   <div style="margin-top: 45px">
    <MyFooter></MyFooter>
   </div>
  </div>
</template>

<script>
// 目标: 项目初始化 - 静态页面
// 1. 创建项目, 下包, 引入bs样式
// 2. 拆分需求组件, 创建 - 分别标签+样式
// 3. App.vue上显示, 微调样式(上下内边距)

// 目标: 数据 铺设到MyGoods组件上
// 1. 数据在data保存一下(页面只能用data里值)
// 2. 页面v-for循环MyGoods组件
// 3. 分别传入obj数据对象 (一对一关系)
// 4. 内部使用数据对象值渲染到标签上
import MyHeader from './components/MyHeader.vue'
import MyGoods from './components/MyGoods.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data() {
    return {
      list: [],
    }
  },
    created(){
    this.$axios({
      url: '/api/cart',

    }).then((res) => {
        this.list = res.data.list
    });
  },

}
</script>

<style scoped>
  .main{
    padding-top: 45px;
    padding-bottom: 50px;
  }
</style>