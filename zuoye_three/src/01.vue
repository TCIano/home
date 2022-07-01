<template>
  <div>
    <span>国内网站：粉丝数量：{{ fans | formatFans1}} 万</span>
    <br>
    <span>国外网站：粉丝数量：{{ fans | formatFans2}} 千</span>
    <p>{{ time | formatDate1}}</p>
    <p>{{ time | formatDate2}}</p>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name:"App",
  data () {
    return {
      fans:'1876986',
      time:1636450540055,
    }
  },
  filters: {
    formatFans1(val) {
      let str = val
      let arr = str.split("")
      arr.splice(3,0,".")
      return str = arr.join("")
    },
    formatFans2(val) {
      let str = val
      let arr = str.split("")
      arr.splice(4,0,".")
      return str = arr.join("")
    },
    formatDate1(val) {
      return moment(val).format('YYYY-MM-DD')
    },
    formatDate2(val) {
      return moment(val).format('YYYY/MM/DD')
    }
  }
}
</script>

<style>

</style>