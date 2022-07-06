<template>
  <div>
  <h1>1. 动态dynamic组件使用</h1>
  <!-- <component :is="comName"></component>
  <br> -->
  <UseDynamic></UseDynamic>
  <h1>2. 组件缓存</h1>
  <UseDynamic1></UseDynamic1>
  <br>
   <h1>3. 组件-插槽</h1>
   <UserSlot></UserSlot>
  </div>
</template>

<script>
import UseDynamic from './views/01_UseDynamic.vue'
import UseDynamic1 from './views/02_UseDynamic.vue'
import UserSlot from './views/03_UserSlot.vue'
  export default {
    components: {
      UseDynamic,
      UseDynamic1,
      UserSlot,

    },
    data() {
      return {
        comName: 'UseDynamic'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>