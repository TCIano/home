<template>
 <div>
  <myHed></myHed>
  <myfoot></myfoot>
 </div>
  
</template>

<script>
import myHed from './components/myHed.vue'
import myfoot from './components/myfoot.vue'
// import axios from 'axios'
// axios.defaults.baseURL = "http://www.liulongbin.top:3006/";
export default {
  components: {
    myHed,
    myfoot
  },
  
  
}
</script>

<style>
  
      input {
    margin-bottom: 15px;
    border-radius: 3px;
  }


</style>