<template>
  <div>
    <router-link to="/allcontacts">All contacts</router-link>&nbsp;
    <router-link to="/mybob">Bob</router-link>&nbsp;
    <router-link to="/myalice">Alice</router-link>
    <br />
    <button @click="handleFn">随机显示</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
