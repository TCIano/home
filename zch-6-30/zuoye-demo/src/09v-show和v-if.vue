<template>
  <div>
  <P v-show="isShow">我是v-show指令</P>
  <button @click="isShow = !isShow">点我隐藏</button>
  <br>
  <p v-if="isShow1">我是v-if指令</p>
  <button @click="isShow1 = !isShow1">点我隐藏</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isShow: false,
        isShow1: false,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>