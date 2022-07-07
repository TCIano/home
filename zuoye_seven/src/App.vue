<template>
  <div>
    <MyHeader
      :background="'blue'"
      :fontColor="'white'"
      title="TabBar"
    ></MyHeader>

    <div class="main">
      <component :is="comName"></component>
    </div>

    <MyTabBar :list="tabList" @changeTab="changeTabFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";
export default {
  data() {
    return {
      comName: "MyGoodsList",
      tabList: [
        // 底部导航的数据
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
    changeTabFn(cName) {
      this.comName = cName;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
