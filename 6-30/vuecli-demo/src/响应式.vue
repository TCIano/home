<template>
  <div>
    <p>{{obj.a}}</p>
    <button @click="add">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {},
    }
  },
  methods: {
    add() {
      this.b = 12 //非响应式
      this.$set(this.obj, 'a', 10)
      console.log(this.obj)
    },
  },
}
</script>

<style>
</style>
