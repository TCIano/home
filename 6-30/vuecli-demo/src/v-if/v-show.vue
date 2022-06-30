<template>
  <div>
    <h1 v-show="isShow">v-show</h1>
    <button @click="isShow=!isShow">v-show</button>

    <hr>
    <h1 v-if="isshow">v-if</h1>
    <button @click="isshow = !isshow">v-if</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isshow: false,
    }
  },
}
</script>

<style>
</style>
