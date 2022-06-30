<template>
  <div>
  <p :class="{active:isShow}" class="ppp">我是标签内容</p>
  <button @click="isShow = !isShow">click Me</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isShow: true,
      }
    }
  }
</script>

<style>
.active {
  color: red;
}
.ppp {
  border: 10px solid #ccc;
}
</style>