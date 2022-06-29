<template>
  <div @click="fatherFn">
  <button @click.stop="btn">.stop阻止冒泡事件</button>
  <a href="http://www.baidu.com" @click.prevent="btn">.prevent阻止默认行为</a>
  <button @click.once="btn">.once程序运行期间,只触发一次事件处理函数</button>
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
      fatherFn() {
        console.log('fatherFn事件触发');
      },
      btn() {
        console.log('12121221');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>