<template>
  <div>
    <div @click="father">
      <p @click.stop="fn">.stop - 阻止事件冒泡</p>
      <a href="http://www.baidu.com" @click.prevent>去百度</a>
      <p @click.once="once">点击观察事件处理函数执行几次</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log(11);
    },
    father() {
      console.log('father');
    },
    once() {
      console.log('one');
    }
  }
}
</script>

<style>

</style>