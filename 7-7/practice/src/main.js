import Vue from "vue";
import App from "./App.vue";
import "./assets/fonts/iconfont.css"; // 引入字体图标css文件
import "bootstrap/dist/css/bootstrap.css";
// console.dir(Vue);
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.directive("focus", {
  inserted(ele) {
    ele.focus();
  },
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
