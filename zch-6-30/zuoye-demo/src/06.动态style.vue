<template>
  <div>
  <p :style="{color: 'skyblue', fontSize: '100px'}">skyblue</p>
  <p :style="{color: color1, fontSize: fontSize1}">aqua</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        color1: 'aqua',
        fontSize1: '100px',
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>