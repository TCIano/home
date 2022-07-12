import axios from "axios";

//方便调用,多个后端接口，不用把接口写死
// http://43.142.37.253:8080/
const request = axios.create({
  baseURL: "http://43.142.37.253:8080/",
});
export default request;
