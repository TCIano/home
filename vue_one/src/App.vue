<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>{{obj.name}}</h1>
    <h1>{{obj.age}}</h1>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo01',

  data() {
    return {
      
      msg:'Hello World',
      obj:{
        name:'zs',
        age:18
      }
    };
  }
};
</script>
