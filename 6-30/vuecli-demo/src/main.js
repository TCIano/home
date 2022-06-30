import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
// Vue.config.productionTip = false;
// 定义过滤器
Vue.filter("resv", (value, sym) => value.split("").reverse().join(sym));

new Vue({
  render: (h) => h(App),
}).$mount("#app");
