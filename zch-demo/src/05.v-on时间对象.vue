<template>
  <div>
  <a @click="one" href="https://www.baidu.com">点击阻止去百度</a>
  <br>
  <a @click="two(10, $event)" href="https://www.baidu.com">阻止去百度</a>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
    return {
      
    }
    },
    methods: {
      one(e) {
      e.preventDefault();
      },
      two(num, e) {
      e.preventDefault();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>