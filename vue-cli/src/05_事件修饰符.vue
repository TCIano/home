<template>
  <div @click="father">
    <span @click.stop="son">子元素</span>
    <a @click.prevent.stop="a" href="https://www.baidu.com">百度跳转</a>
    <button @click.once="btn">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    father() {
      console.log('father')
    },
    son() {
      console.log('son')
    },
    a() {
      console.log('跳转')
    },
    btn() {
      console.log('按钮')
    },
  },
}
</script>

<style>
</style>
