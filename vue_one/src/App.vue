<template>
  <div>
    <!-- 1. 事件触发, 无传值, 可以直接获取事件对象
    2. 事件触发, 传值, 需要手动传入$event -->
    <a href="http://www.baidu.com" @click="Fn(10,$event)">百度</a>
    <hr />
    <a href="http://www.taobao.com">淘宝</a>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo04',

  data() {
    return {
      
    };
  },

  methods: {
    Fn(num,e) {
      console.log(num);
      e.preventDefault()
    }
  },
};
</script>

<style scoped>

</style>