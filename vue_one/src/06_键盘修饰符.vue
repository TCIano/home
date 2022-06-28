<template>
  <div>
    <!-- 1. 绑定键盘按下事件.enter-回车 
         2. .esc修饰符 - 取消键-->
    <input type="text" @keydown.enter="fn">
    <hr>
    <input type="text" @keydown.esc="esc">
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log('enter');
    },
    esc() {
      console.log('esc');
    }
  }
}
</script>

<style>

</style>