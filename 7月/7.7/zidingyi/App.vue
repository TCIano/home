<template>
  <div>
    <Header title="tabbar"></Header>
    <div style="margin-top: 45px">
      <component :is="comName"></component>
    </div>
    <TabBar :list="tabList" @changeTab="changeTabFn"></TabBar>
  </div>
</template>

<script>
import Header from './components/MyHeader.vue';

import TabBar from './components/MyTabBar.vue';

import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';
export default {
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
      comName: 'MyGoodsList',
      
    };
  },
  components: {
    Header,
    TabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changeTabFn(val) {
      this.comName = val;
    },
  },

};
</script>

<style></style>
