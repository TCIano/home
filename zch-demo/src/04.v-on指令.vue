<template>
  <div>
    <h1>{{ count }}</h1>
<button v-on:click="count++">+1</button>
<button v-on:click="addFn">+1</button>
<button v-on:click="addCountFn(5)">+5</button>
<button @click="subFn(5)">-5</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        count: 0
      }
    },
    methods: {
      addFn() {
        this.count++;
      },
      addCountFn(num){
        this.count += num;
      },
      subFn(sum) {
        this.count -= sum;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>