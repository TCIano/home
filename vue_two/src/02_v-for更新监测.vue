<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <button @click="reverseFn">数组翻转</button>
    <button @click="sliceFn">截取前3个</button>
    <button @click="change">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo02VFor',

  data() {
    return {
      arr: ["1", "2", "3", "4 "],
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
      // 
      this.$set(this.arr,0,1000)
    
    }

  },
};
</script>