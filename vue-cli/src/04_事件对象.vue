<template>
  <div>
    <a @click="one" :href="tar">baidu </a>
    <span @click="two(1,$event)">点我</span>
    <button @click="three">点击点击</button>
    once
  </div>
</template>

<script>
export default {
  data() {
    return {
      tar: 'https://www.baidu.com',
    }
  },
  methods: {
    one(e) {
      e.preventDefault()

      console.log(e)
    },
    two(val, e) {
      console.log(e)
      console.log(val, e.view.origin)
      console.log(e.view)
    },
    three(e) {
      console.log(e)
    },
  },
}
</script>

<style>
</style>
