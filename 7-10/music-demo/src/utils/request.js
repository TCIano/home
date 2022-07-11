import axios from "axios";

//方便调用,多个后端接口，不用把接口写死
const request = axios.create({
  baseURL: "http://localhost:3000",
});
export default request;
