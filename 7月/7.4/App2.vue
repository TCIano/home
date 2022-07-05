<template>
<div>
  
  <Aner title='dash' type='success' @task='clickF'/>
</div>
</template>

<script>
import Aner from './components/Aner.vue'
export default {
  components:{
    Aner
  },
  methods:{
    clickF(){
      alert(1111)
    }
  }
};
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}

</style>
