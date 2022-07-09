<template>
  <div>
    <div>
      <h1>切换页面</h1>
      <router-link to="/myhome">首页</router-link>&nbsp;
      <router-link to="/myclass">分类</router-link>&nbsp;
      <router-link to="/myorder">订单</router-link>&nbsp;
      <router-link to="/mymy">我的</router-link>
      <br />
      <h1>二级路由嵌套</h1>
      <router-link to="/mypage">主页</router-link>&nbsp;
      <router-link to="/mynews">新闻</router-link>&nbsp;
      <router-link to="/mype">体育</router-link>
      <br />
      <h1>tabbar切换</h1>
      <router-link to="/mygoodslist">首页</router-link>&nbsp;
      <router-link to="/mygoodssearch">搜索</router-link>&nbsp;
      <router-link to="/myuserinfo">信息</router-link>
      <br />
      <h1>三级路由嵌套</h1>
      <router-link to="/myuirouter">UI_Router</router-link>&nbsp;
      <router-link to="/mycontacts">Contacts</router-link>&nbsp;
      <router-link to="/MyAbout">About</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
