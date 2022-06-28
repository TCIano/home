<template>
  <div>

    <h1>{{msg}}</h1>
    <button @click="res">翻转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world',
    }
  },
  methods: {
    res() {
      //1.把字符串分割为数组
      //2.把数组翻转
      //3.把翻转的数组转为字符串
      let arr = this.msg.split('')
      arr.reverse()
      this.msg = arr.join('')
      // this.msg = this.msg.split('').reverse().join('')
    },
  },
}
</script>

<style>
</style>
