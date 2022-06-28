<template>
  <div>
    {{count}}
    回车 <input type="text" name="" id="" @keydown.enter="enterFn"><br>
    退出<input type="text" name="" id="" @keyup.esc="escFn(count)">
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 12,
    }
  },
  methods: {
    enterFn() {
      alert('回车')
    },
    escFn(num) {
      alert('退出' + num)
    },
  },
}
</script>

<style>
</style>
