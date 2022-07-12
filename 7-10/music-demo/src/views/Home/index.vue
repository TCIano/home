<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in recommendList" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">
          {{ item.name }}
        </p>
      </van-grid-item>
    </van-grid>
    <!-- 最新音乐 -->
    <van-cell class="title" title="最佳匹配" />
    <!-- <van-cell
      v-for="item in newSongList"
      :key="item.id"
      :label="
        `${(item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0].name) ||
          '未知歌手'}-${item.name}`
      "
      :title="item.name"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell> -->
    <SongItem
      v-for="item in newSongList"
      :key="item.id"
      :author="
        `${(item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0].name) ||
          '未知歌手'}`
      "
      :name="item.name"
      :id="item.id"
    ></SongItem>
  </div>
</template>

<script>
import { getRecommendListApi, getNewSongListApi } from "@/api/index.js";
import SongItem from "@/components/SongItem.vue";
console.log(getNewSongListApi());
console.log(getRecommendListApi());
export default {
  data() {
    return {
      recommendList: [], // 推荐歌单
      newSongList: [], //最新歌曲
    };
  },
  components: {
    SongItem,
  },
  created() {
    //获取列表的函数
    this.getPersonalized();
    //获取最新歌曲函数
    this.getNewSong();
  },
  methods: {
    //获取推荐歌单列表接口请求
    async getPersonalized() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        this.recommendList = res.data.result;
      } catch (error) {
        console.log(e);
      }
    },
    //发起最新音乐接口请求
    async getNewSong() {
      try {
        const res = await getNewSongListApi();
        this.newSongList = res.data.result;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: rgb(111, 192, 225);
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  .van-grid-item__content {
    padding: 10px 0px;
  }

  .van-cell__value {
    padding-top: 10px;
  }

  .van-cell__label {
    width: 300px;
  }
}
</style>
