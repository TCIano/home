// 路由-相关模块
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Play from "@/views/Play";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/layout/home",
  },
  {
    path: "/layout",
    component: Layout,
    // redirect: "/layout/home",
    children: [
      {
        path: "/layout/home",
        meta: {
          title: "首页",
        },
        component: Home,
      },
      {
        path: "/layout/search",
        meta: {
          title: "搜索",
        },
        component: Search,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
