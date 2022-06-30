<template>
  <div>
  <h1>{{obj.a}}</h1>
  <button @click="change">改变</button>
  <h1>{{ obj1 && obj1.a}}</h1>
  <button @click="change1">改变</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        obj: {
          b: 10,
          c: 12,
        },
        obj1: {}
      }
    },
    methods: {
      change() {
        // this.obj.a = 10;
        // console.log(this.obj);// 报错
        // 解决方案
        // this.obj = {
        //   a: 18,
        //   b: 10,
        //   c: 12,
        // }
        // console.log(this.obj);
        this.$set(this.obj, "a", 18)
        console.log("===", this.obj);
      },
      change1() {
        this.obj1 = {
          a: 18
        };
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>
