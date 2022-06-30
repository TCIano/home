<template>
  <div>
  <p v-if="age >= 18">成年人</p>
  <p v-else-if="age >= 12 && age <= 18">青少年</p>
  <p v-else>儿童</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        age: 18
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>