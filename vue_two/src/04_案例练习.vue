<template>
  <div>
    <ul>
      <li class="active">大学起点</li>
      <li>高中起点</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo03Class',

  data() {
    return {
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style>
   ul {
    list-style: none;
    border-radius: 10px;
    width: 400px;
    overflow: hidden;
    padding: 0;
  }
  ul li {
    float: left;
    width: 100px;
    height: 40px;
    background-color: #ccc;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  li.active {
    background-color: blue;
  }
</style>
