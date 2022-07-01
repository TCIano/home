<template>
  <div>
    <!-- <input v-model="item">国内网站:粉丝数量:187.6986万
    <input value="">外国网站:粉丝数量: 1876.986千 -->
    <p>国内网站:粉丝数量:{{msg}}万</p>
    <p>外国网站:粉丝数量: {{msg | cl}}千</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'187.6986'
    }
  },
//   // 局部过滤器
// filters: {过滤器名字: (值) => {return "返回处理后的值"}
  filters:{
    cl:(msg) =>{
      return (msg * 10).toFixed(3)
    }
  }
}
</script>

<style>

</style>