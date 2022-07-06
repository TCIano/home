<template>
  <div>
    <button @click="comName = 'page'">手机注册</button>
    <button @click="comName = 'emaile'">邮箱注册</button>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import page from '../components/registered/page.vue'
import emaile from '../components/registered/emaile.vue'
  export default {
    components: {
      page,
      emaile,
    },
    data() {
      return{
        comName: 'page',
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>