<template>
  <div>
    {{str}}
    <h1 v-html="str"></h1>
    <h1 v-text="str"></h1>
    <h2 v-html="str">{{str}}</h2>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemoApp',

  data() {
    return {
      str: '<span>span标签</span>',
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
</style>
