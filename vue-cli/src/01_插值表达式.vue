<template>
  <div id="app">
    {{msg}}
    <div>
      {{obj.age >=890?'大于等于':'不大于'}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world1212',
      obj: {
        name: '789',
        age: 89,
      },
    }
  },
}
</script>

<style scoped>
</style>
