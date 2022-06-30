<template>
  <div>
    <!-- 观察数组的哪些方法 可以导致vue的视图发生更新 -->
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="reverseFn">数组翻转</button>
    <button @click="sliceFn">截取前3个</button>
    <button @click="change">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: "VuecliDemo02VFor",

  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    reverseFn() {
      this.arr.reverse()
    },
    sliceFn() {
      this.arr = this.arr.slice(0,3)
    },

     
    change() {
      // this.arr[0] = 1000;
      // console.log(this.arr);
      
      // 解决方案
      // $set(需要添加属性的目标的对象， 索引号， 需要改变的值)
      this.$set(this.arr,0,1000)
    },
  },
};
</script>

<style scoped>
</style>