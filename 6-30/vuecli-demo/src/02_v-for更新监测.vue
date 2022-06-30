<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <button @click="reverse">数组翻转</button>
    <button @click="slice">截取前3个</button>
    <button @click="update">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo02VFor',

  data() {
    return {
      arr: [1, 2, 6, 5, 8, 4],
    }
  },
  mounted() {},
  methods: {
    reverse() {
      this.arr.reverse()
    },
    slice() {
      this.arr = this.arr.slice(0, 3)
    },
    update() {
      this.$set(this.arr, 0, 12)
    },
  },
}
</script>

<style scoped>
</style>


