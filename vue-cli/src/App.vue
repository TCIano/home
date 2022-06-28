<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" @mouseover="mouseFn(1)" @click="click(1,$event)">
      <img src="./assets/02.jpg" alt="" @mouseover="mouseFn(2)" @click="click(2,$event)">
      <img src="./assets/03.jpg" alt="" @mouseover="mouseFn(3)" @click="click(3,$event)">
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="currentImg" alt="" style="width:600px;height:auto;">
    </div>
    <div>
    </div>
  </div>
</template>

<script>
//导入图片
import img01 from './assets/01.jpg'
import img02 from './assets/02.jpg'
import img03 from './assets/03.jpg'
export default {
  data() {
    return {
      currentImg: img01,
    }
  },
  methods: {
    mouseFn(val) {
      this.currentImg = { 1: img01, 2: img02, 3: img03 }[val]
    },
    click(val, e) {
      // console.log(111)
      let img = { 1: '红花', 2: '雪人', 3: '雾凇' }
      alert('这张图片是' + img[val] + '地址为：' + e.target.src)
    },
  },
}
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
