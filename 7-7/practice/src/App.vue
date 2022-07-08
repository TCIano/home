<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <keep-alive>
      <component :is="comName" style="margin-top: 50px"></component>
    </keep-alive>
    <MyTabBar :list="tabList" @changeCom="changeCom"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./view/MyGoodsList.vue";
import MyGoodsSearch from "./view/MyGoodsSearch.vue";
import MyUserInfo from "./view/MyUserInfo.vue";
export default {
  data() {
    return {
      comName: "MyGoodsList", //存放切换的当前组件
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changeCom(val) {
      console.log(val);
      //拿到每次点击的组件名
      this.comName = val;
    },
  },
};
</script>

<style></style>
