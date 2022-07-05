<template>
  <div>
    <p>粉丝{{ fensi | guolv('w') }}</p>
    <p>粉丝{{ fensi | guolv('q') }}</p>
    <p>时间{{ timer | shijian }}</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'App',
  data() {
    return {
      fensi: 4646564433,
      timer: 1636450540055,
    };
  },
  filters: {
    guolv(val, arr) {
      if ((arr == 'w')) {
        return val / 10000 + '万';
      } else {
        return val / 1000 + '千';
      }
    },
    shijian(val) {
      return moment(parseInt(val)).format('YYYY/MM/DD hh-mm-ss');
    function forDate(now){
        var year=now.getFullYear()
        var month=now.getMonth()+1
        var date=now.getDate()
        var hour=now.getHours()
        var minute=now.getMinutes()
        var second=now.getSeconds()
        return year+'-'+month+'-'+date+'-'+hour+':'+minute+":"+second
    }
    },
  },
};
</script>

<style></style>
