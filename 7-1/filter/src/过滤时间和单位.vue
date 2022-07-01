<template>
  <div>
    <h3>国内网站粉丝数量：{{homeland | format('万')}}</h3>
    <h3>外国网站粉丝数量：{{other | format('千')}}</h3>
    <div>
      <h4>时间：{{time | date('-')}}</h4>
      <h4>时间：{{time | date('/')}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeland: 1876986,
      other: 1876986,
      time: 1636450540055,
    }
  },
  filters: {
    format(val, fmt) {
      // console.log(val, fmt)
      if (fmt == '千') {
        return val / 1000 + fmt
      } else if (fmt == '万') {
        return val / 10000 + fmt
      }
    },
    date(val, fmt) {
      let date = new Date(val)
      console.log(date, fmt)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDay()
      // console.log(year, month, day)
      return year + fmt + month + fmt + day
    },
  },
}
</script>

<style>
</style>
