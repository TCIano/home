<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name}}</h2>
    <h3>{{ obj.age}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data (){
      return {
        msg: 'Hello, qiangduan!',
        obj: {
          name: 'zhangsan',
          age: 18,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>