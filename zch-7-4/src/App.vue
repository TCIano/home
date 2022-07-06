<template>
  <div>
    <Life v-if="show"></Life>
    <button @click="show = false">销毁组件</button>
    <br />
    <h1>2. axios使用</h1>
    <UseAxios></UseAxios>
    <hr />
    <h1>3. $refs的使用</h1>
    <More></More>
    <hr />
  </div>
</template>

<script>
import Life from './components/Life.vue'
import UseAxios from './components/UseAxios.vue'
import More from './components/More.vue'
export default {
  components: {
    Life,
    UseAxios,
    More,
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style scoped></style>
