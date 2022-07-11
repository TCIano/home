//搜索歌曲
import request from "@/utils/request";
export const searchResult = (params) => {
  return request({
    url: "/search/hot",
    params,
  });
};
export const searchList = (params) => {
  return request({
    url: "/cloudsearch",
    params,
  });
};
