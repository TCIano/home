<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <template v-slot:title>
          <h4>芙蓉楼送辛渐</h4>
        </template>
        <template v-slot:content>
          <img src="../assets/mm.gif" alt="">
          <span>我是内容</span>
        </template>
      </Pannel>
      <Pannel>
        <template #title>
          <span style="color: red;">我是标题</span>
        </template>
        <template #content>
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </template>
      </Pannel>
     <Pannel>
        <template #title>
          <span style="color: red;">我是图片</span>
        </template>
        <template #content>
          <img src="../assets/a.jpg" alt="">
        </template>
      </Pannel>
    </div>
  </div>
</template>

<script>
import Pannel from "../components/04/Pannel";
export default {
  components: {
    Pannel,
  },
};
</script>