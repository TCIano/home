<template>
  <div>
  <div>
    <router-link to="mygoodslist">商品列表</router-link>
    <router-link to="mygoodssearch">商品搜索</router-link>
    <router-link to="myuserinfo">我的信息</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>