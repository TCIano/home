<!-- 复用播放组件 -->
<template>
  <van-cell :label="`${author}-${name}`" :title="name">
    <template>
      <van-icon color="#000" name="play-circle-o" size="28" @click="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    playFn() {
      //给play页面传参
      this.$router.push({
        //跳转到play
        path: "/play",
        query: {
          id: this.id, // 歌曲id, 通过路由跳转传递过去
        },
      });
    },
  },
};
</script>

<style></style>
