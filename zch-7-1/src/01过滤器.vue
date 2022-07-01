<template>
  <div>
  <span>国内网站：粉丝数量：{{fans | format2}} 万</span>
  <br>
  <span>国外网站：粉丝数量：{{fans | format3}} 千</span>
  <p>时间：{{times | format}}</p>
  <p>时间：{{times | format4}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
name: 'App',
 data() {
  return {
    fans: '1876986',
    times: 1636450540055
  }
 },
   filters: {
    format(val){
        return moment(val).format("YYYY-MM-DD HH:mm:ss")
    },
        format4(val){
        return moment(val).format("YYYY/MM/DD HH:mm:ss")
    },
    // 转换成单位 千
    // format1(val) {
    //   return val.toLocaleString()
    // },
    format2(val) {
      let str = val;
      let arr = str.split("");
      arr.splice(3,0, ".")
      return str = arr.join("");
    },
        format3(val) {
      let str = val;
      let arr = str.split("");
      arr.splice(4,0, ".")
      return str = arr.join("");
    }
  }
}
</script>

<style>

</style>