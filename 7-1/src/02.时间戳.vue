<template>
  <div>
    <!-- <input v-model="item">国内网站:粉丝数量:187.6986万
    <input value="">外国网站:粉丝数量: 1876.986千 -->
    <p>{{ msg | formatDate}}</p>
    <p>{{ msg | formatDates}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      msg:new Date()
    }
  },
//   // 局部过滤器
// filters: {过滤器名字: (值) => {return "返回处理后的值"}
  filters:{
    formatDate (val){
        return moment(val).format('YYYY-MM-DD')
    },
    formatDates (val){
        return moment(val).format('YYYY-MM-DD').replace(/-/g,'/')
    }
  },
 
}
</script>

<style>

</style>
