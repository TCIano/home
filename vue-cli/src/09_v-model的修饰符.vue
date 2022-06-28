<template>
  <div>
    <input type="text" name="" id="" v-model.number="num">
    <textarea name="" id="" cols="30" rows="10" v-model.trim="info"></textarea>
    <input type="text" name="" id="" :value="val" @change="val = $event.target.value">
    <input type="text" name="" id="" v-model.lazy="ino">
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: '',
      info: '',
      val: '',
      ino: '',
    }
  },
  methods: {
    // iptFn(e) {},
  },
}
</script>

<style>
</style>
