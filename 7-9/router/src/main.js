import Vue from "vue/dist/vue.common";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./router/index";
Vue.use(VueRouter);
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
const router = new VueRouter({
  routes,
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
