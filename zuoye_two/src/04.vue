<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
      <li v-for="(item, index) in arr" :key="item">{{item}}-{{index}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"App",
  data() {
    return {
      arr:['wyq', 'zy', 'wcy', 'yzx']
    }
  }
}
</script>

<style>

</style>