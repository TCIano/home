<template>
  <div>
<MyHeader title="tabber"></MyHeader>
<div style="margin-top: 45px">
  <component :is="comName"></component>
</div>
<MyTaBar :list="tabList" @changeTab="changeTabFn"></MyTaBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTaBar from './components/MyTabBar.vue'

import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
  export default {
    components: {
      MyHeader,
      MyTaBar,
      MyGoodsList,
      MyGoodsSearch,
      MyUserInfo,
    },
    data(){
      return {
        tabList: [
    {
        iconText: "icon-shangpinliebiao",
        text: "商品列表",
        componentName: "MyGoodsList"
    },
    {
        iconText: "icon-sousuo",
        text: "商品搜索",
        componentName: "MyGoodsSearch"
    },
    {
        iconText: "icon-user",
        text: "我的信息",
        componentName: "MyUserInfo"
    }
],
    comName: 'MyGoodsList',
      }
    },
    methods: {
      changeTabFn(val) {
        this.comName = val
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>