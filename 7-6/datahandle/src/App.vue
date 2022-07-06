<template>
  <div>
    <MyTableVue :arr="list">
      <template v-slot:id="scoped">
        {{ scoped.row.id }}
      </template>
      <template v-slot:name="scoped">
        {{ scoped.row.name }}
      </template>
      <template v-slot:age="scoped">
        {{ scoped.row.name }}
      </template>
      <template v-slot:eleA="scoped">
        <a :href="scoped.row.headImgUrl">{{ scoped.row.headImgUrl }}</a>
      </template>
      <template v-slot:eleImg="scoped">
        <img :src="scoped.row.headImgUrl" alt="" />
      </template>
      <template v-slot:eleTxt="scoped">
        {{ scoped.row.headImgUrl }}
      </template>
    </MyTableVue>
  </div>
</template>

<script>
import MyTableVue from "./components/MyTable.vue";
export default {
  data() {
    return {
      list: [
        {
          id: 100,
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
          type: 0, // 0 显示成a标签
        },
        {
          id: 101,
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
          type: 1, // 1 显示成图片
        },
        {
          id: 102,
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
          type: 1, // 1 显示成图片
        },
        {
          id: 103,
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
          type: 2, // 2 显示成文本
        },
      ],
    };
  },
  components: {
    MyTableVue,
  },
};
</script>

<style></style>
