<template>
  <div>
    <div>
      <router-link to="page">首页</router-link>
      <router-link to="classify">分类</router-link>
      <router-link to="indent">订单</router-link>
      <router-link to="my1">我的</router-link>
    </div>
    <div>
      <p>显示路由切换的页面</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
