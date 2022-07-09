<template>
  <div>
    <div class="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/my">我的</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/tor">分类</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  color: red;
}
</style>
