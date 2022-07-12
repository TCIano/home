<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="inputFn"
    />

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
    <!-- 最佳匹配 -->
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell
          v-for="(item, index) in searchSongList"
          :key="index"
          :title="item.name"
          :label="`${item.ar[0].name || item.ar[1].name}-${item.name}`"
        /> -->
        <SongItem
          v-for="(item, index) in searchSongList"
          :key="index"
          :author="`${item.ar[0].name || item.ar[1].name}`"
          :name="item.name"
          :id="item.id"
        ></SongItem>
      </van-list>
    </template>
  </div>
</template>
<script>
import { getsearchResultApi } from "@/api/index.js";
import { getsearchListApi } from "@/api";
import SongItem from "@/components/SongItem.vue";

export default {
  data() {
    return {
      tag: [],
      value: "",
      searchSongList: [],
      list: [],
      loading: false,
      finished: false,
      page: 1, //当前搜索列表的页数
      limit: 10, //每次请求返回数量
      timer: null, //定时器
      cando: true, //节流
    };
  },
  created() {
    //获取热门标签列表函数
    this.getsearchResult();
  },
  components: {
    SongItem,
  },
  methods: {
    //获取热门标签列表
    async getsearchResult() {
      try {
        const res = await getsearchResultApi();
        this.tag = res.data.result.hots;
        // console.log(this.tag);
      } catch (e) {
        console.log(e);
      }
    },
    //点击事件
    async click(val) {
      //重置 页数 并且让加载 结束
      this.page = 1;
      this.finished = false;
      this.value = val;
      // console.log(this.getList());
      //调用getList 返回promise
      this.searchSongList = await this.getList(this.value);
      //获取焦点(移动端获取什么焦点，手指就是焦点)
    },
    async onLoad() {
      //加载下移屏幕，让page++
      this.page++;
      //请求接口获取每一段屏幕的列表内容
      const res = await this.getList(this.value);
      console.log(res);
      //如果返回过来的数组为空（或者是没有 返回过来的数据），就退出让加载结束
      if (res.length == 0) {
        this.finished = true;
        this.loading = false;
        return;
      }
      //res是一个 数组，要往searchSongList中推数组，需要给res 打散
      this.searchSongList.push(...res);
      // this.searchSongList = [...this.searchSongList, ...res];

      //加载结束,让下一次请求正常
      this.loading = false;
    },
    //搜索匹配
    async inputFn() {
      //防抖，让规定时间只触发一次，多次触发，重新计算
      //如果定时器存在，清除上一次定时器
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(async () => {
        this.page = 1;
        this.finished = false;
        //如果输入框内容为空，则不显示 搜索到的列表(让列表数组为空)
        if (this.value.trim().length == 0) {
          return (this.searchSongList = []);
        }
        //调用getList 返回promise
        this.searchSongList = await this.getList(this.value);
        // this.timer = null;
      }, 1000);

      //节流
      //第一次开启定时器，可以顺利执行，
      //如果要再次触发（且在规定的定时器事件之内）触发输入事件，则会return
      // if (this.cando == false) {
      //   return;
      // }
      // this.cando = false;
      // setTimeout(async () => {
      //   this.cando = true;

      //   this.page = 1;
      //   this.finished = false;
      //   //如果输入框内容为空，则不显示 搜索到的列表(让列表数组为空)
      //   if (this.value.trim().length == 0) {
      //     return (this.searchSongList = []);
      //   }
      //   //调用getList 返回promise
      //   this.searchSongList = await this.getList(this.value);
      //   // this.timer = null;
      // }, 1000);
      // clearTimeout(this.timer);
    },
    //封装获取列表函数
    async getList(val) {
      //val 为input输入框的内容
      try {
        // limit : 返回数量 , 默认为 30
        // offset : 偏移数量，用于分页 ,
        //  如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
        const res = await getsearchListApi({
          keywords: val,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        //返回数据，提高复用性，如果没有数据，返回空数组，以免报错
        return res.data.result.songs || [];
        // this.$toast.success("获取成功");
      } catch (error) {
        return [];
        // this.$toast.fail("获取失败");
      }
    },
  },
};
</script>
<style scoped>
.van-tag--plain {
  margin-left: 5px;
}
</style>
