<template>
  <div>
    <Life v-if="show"></Life>
    <button @click="show = false">销毁组件</button>
  </div>
</template>

<script>
import Life from './components/Life.vue'
export default {
  components: {
    Life,
  },
  data() {
    return {
      show: true,
    }
  }
}
</script>

<style scoped></style>
