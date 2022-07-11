//引入自己封装的requst请求
import request from "@/utils/request";
// 首页 - 推荐歌单请求
export const getRecommendList = (params) =>
  //返回请求数据
  request({
    url: "/personalized",
    params,
    // 将来外面可能传入params的值 {limit: 20}
  });

export const getNewSongList = (params) => {
  return request({
    url: "/personalized/newsong",
    params,
  });
};
