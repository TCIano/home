<template>
<div>
  <page></page>
</div>
</template>

<script>
import page from './views/01_page.vue'
// import emaile from './components/registered/emaile.vue'
  export default {
    components: {
      page,
      // emaile,
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