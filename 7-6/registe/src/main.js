import Vue from "vue";
import App from "./App.vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// // 使 BootstrapVue 在整个项目中可用
// Vue.use(BootstrapVue);
// // 可选安装 BootstrapVue 图标组件插件
// Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
