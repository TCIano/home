<template>
  <div>
  <input type="text" @keydown.enter="enterFn">
  <input type="text" @keydown.esc="escFn">
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
      enterFn() {
        alert('Enter键被按下了');
      },
      escFn() {
        alert('esc键被按下了');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>