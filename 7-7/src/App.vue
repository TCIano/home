<template>
  <div>
    <MyHeader title="tabble"></MyHeader>
    <div style="margin-top:45px">
        <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @change="changeFn"></MyTabBar>
  </div>
</template>

<script>
import MyTabBar from "./components/MyTabBar.vue";
import MyHeader from './components/MyHeader.vue'
// import MyTable from './components/MyTable.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
export default {
  components: {
    MyTabBar,
    MyHeader,
    // MyTable,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  data() {
    return {
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
      comName:'MyGoodsList'
    };
  },
  methods: {
    changeFn(val) {
      this.comName = val
    }
  }
};
</script>

<style>
</style>