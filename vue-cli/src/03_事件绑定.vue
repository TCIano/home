<template>
  <div>
    计数：{{msg}}
    <button v-on:click="msg++">+1</button>
    <button v-on:click="add">+1</button>
    <button @click="addFn(5)">+5</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 0,
    }
  },
  methods: {
    add() {
      this.msg++
    },
    addFn(val) {
      this.msg += val
    },
  },
}
</script>

<style>
</style>
