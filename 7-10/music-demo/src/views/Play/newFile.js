import { getSongByIdApi, getLyricByIdApi } from "@/api";
import { Icon } from "vant";

export default (await import("vue")).defineComponent({
  components: {
    [Icon.name]: Icon,
  },
  name: "play",
  data() {
    return {
      playState: false,
      id: this.$route.query.id,
      songInfo: {},
      lyric: {},
      curLyric: "",
      lastLy: "", // 记录当前播放歌词
    };
  },
  computed: {
    needleDeg() {
      // 留声机-唱臂的位置属性
      return this.playState ? "-7deg" : "-38deg";
    },
  },
  methods: {
    async getSong() {
      // 获取歌曲详情, 和歌词方法
      const res = await getSongByIdApi(this.id);
      this.songInfo = res.data.songs[0];
      // console.log(this.songInfo);
      // 获取-并调用_formatLyr方法, 处理歌词
      const lyrContent = await getLyricByIdApi(this.id);
      const lyricStr = lyrContent.data.lrc.lyric;
      this.lyric = this._formatLyr(lyricStr);
      // 初始化完毕先显示零秒歌词
      this.curLyric = this.lyric[0];
    },
    _formatLyr(lyricStr) {
      // 可以看network观察歌词数据是一个大字符串, 进行拆分.
      let reg = /\[.+?\]/g; //
      let timeArr = lyricStr.match(reg); // 匹配所有[]字符串以及里面的一切内容, 返回数组

      // console.log(timeArr); // ["[00:00.000]", "[00:01.000]", ......]
      let contentArr = lyricStr.split(/\[.+?\]/).slice(1); // 按照[]拆分歌词字符串, 返回一个数组(下标为0位置元素不要,后面的留下所以截取)

      // console.log(contentArr);
      let lyricObj = {}; // 保存歌词的对象, key是秒, value是显示的歌词
      timeArr.forEach((item, index) => {
        // 拆分[00:00.000]这个格式字符串, 把分钟数字取出, 转换成秒
        let ms = item.split(":")[0].split("")[2] * 60;
        // 拆分[00:00.000]这个格式字符串, 把十位的秒拿出来, 如果是0, 去拿下一位数字, 否则直接用2位的值
        let ss =
          item
            .split(":")[1]
            .split(".")[0]
            .split("")[0] === "0"
            ? item
                .split(":")[1]
                .split(".")[0]
                .split("")[1]
            : item.split(":")[1].split(".")[0];
        // 秒数作为key, 对应歌词作为value
        lyricObj[ms + Number(ss)] = contentArr[index];
      });
      // 返回得到的歌词对象(可以打印看看)
      // console.log(lyricObj);
      return lyricObj;
    },
    audioStart() {
      // 播放按钮 - 点击事件
      if (!this.playState) {
        // 如果状态为false
        this.$refs.audio.play(); // 调用audio标签的内置方法play可以继续播放声音
      } else {
        this.$refs.audio.pause(); // 暂停audio的播放
      }
      this.playState = !this.playState; // 点击设置对立状态
    },
    showLyric() {
      // 监听播放audio进度, 切换歌词显示
      this.$refs.audio.addEventListener("timeupdate", () => {
        let curTime =
          this.$refs.audio &&
          this.$refs.audio.currentTime &&
          Math.floor(this.$refs.audio.currentTime);
        // 避免空白出现
        if (this.lyric[curTime]) {
          this.curLyric = this.lyric[curTime];
          this.lastLy = this.curLyric;
        } else {
          this.curLyric = this.lastLy;
        }
      });
    },
  },
  mounted() {
    this.getSong();
    this.showLyric();
    // console.log(this.$route.query.id);
  },
});
