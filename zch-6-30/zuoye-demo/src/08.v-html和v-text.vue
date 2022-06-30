<template>
  <div>
    {{ str }}
    <h1 v-html="str"></h1>
    <h1 v-text="str"></h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        str: '<span>我是一个标签</span>'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>