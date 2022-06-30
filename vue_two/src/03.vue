<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in navs" :key="index"
        :class="{active:currentIndex === index}"
        @click="btn(index)"
      >
      {{item}}
      </li>
      <!-- <li>高中起点</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: ["大学起点", "高中起点", "初中起点", "小学起点"],
      currentIndex:0
    };
  },

  methods: {
    btn(val) {
      //把val 也就是inedx 赋值给current  让他点击时同步index和current 从而达到 true ,实现点谁谁高亮
      this.currentIndex =val
    }
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