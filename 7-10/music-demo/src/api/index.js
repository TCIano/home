//集合所有的 请求方便导出
import { getRecommendList, getNewSongList } from "./Home";
import { searchResult, searchList } from "./Search";
import { getSongById, getLyricById } from "./Play";
export const getRecommendListApi = getRecommendList;
export const getNewSongListApi = getNewSongList;
export const getsearchResultApi = searchResult;
export const getsearchListApi = searchList;
export const getSongByIdApi = getSongById;
export const getLyricByIdApi = getLyricById;
