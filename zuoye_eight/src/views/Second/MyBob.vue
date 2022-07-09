<template>
  <div>
    <div>
      <h1>Bob</h1>
      <ul>
        <li><router-link to="/mycontacts/mybob/myblog">blog</router-link></li>
        <li><router-link to="/mycontacts/mybob/myfax">fax</router-link></li>
      </ul>
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
