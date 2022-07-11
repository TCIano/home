<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />

    <!-- 热门搜索 -->
    <template v-if="searchSongList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px;">
        <van-tag
          color="rgb(120, 192, 225)"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tag"
          :key="index"
          @click="click(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <!-- 最近匹配 -->
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchSongList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name || item.ar[1].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getsearchResultApi } from "@/api/index.js";
import { getsearchListApi } from "@/api";
export default {
  data() {
    return {
      tag: [],
      value: "",
      searchSongList: [],
      loading: false,
      finished: true,
    };
  },
  created() {
    this.getsearchResult();
  },
  methods: {
    async getsearchResult() {
      try {
        const res = await getsearchResultApi();
        this.tag = res.data.result.hots;
      } catch (e) {
        console.log(e);
      }
    },
    //点击事件
    async click(val) {
      this.value = val;
      try {
        const res = await getsearchListApi({
          keywords: this.value,
        });
        this.searchSongList = res.data.result.songs;
        this.$toast.success("获取成功");
      } catch (error) {
        this.$toast.fail("获取失败");
      }
    },
    onLoad() {},
  },
};
</script>
<style scoped>
.van-tag--plain {
  margin-left: 5px;
}
</style>
