<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" @mouseenter="leaver(1)" @click="fn(1,$event)"/>
      <img src="./assets/02.jpg" alt="" @mouseenter="leaver(2)" @click="fn(2,$event)"/>
      <img src="./assets/03.jpg" alt="" @mouseenter="leaver(3)" @click="fn(3,$event)"/>
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="current" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img01 from './assets/01.jpg'
import img02 from './assets/02.jpg'
import img03 from './assets/03.jpg'
export default {
  name: 'App',
  data() {
    return {
      current:img01
    };
  },
  methods: {
    leaver(val){
      this.current={1:img01,2:img02,3:img03}[val]
    },
    fn(val,e){
      alert(`第${val}张${e.target.src}`)
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
