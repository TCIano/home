import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import axios from "axios";
//引入全局axios
Vue.prototype.$axios = axios;
//全局引入地址前缀
axios.defaults.baseURL = "http://www.liulongbin.top:3006";
new Vue({
  render: (h) => h(App),
}).$mount("#app");
