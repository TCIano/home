import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find' // @是src的绝对地址
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound.vue'
import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'
// 目标: vue-router基础使用
// 1. 下载vue-router  (yarn add vue-router)
// 2. 引入
import VueRouter from 'vue-router'
// 3. 注册全局组件
Vue.use(VueRouter)
// 4. 规则数组
const routes = [
  {path: '/', redirect: "/find"},
  { path: '/find', name: "Find", component: Find},
  { path: '/my', name: "My", component: My},
  { path: '/part', name: "Part", component: Part},
  {path: '*', component: NotFound}
]
// 5. 生成路由对象
const router = new VueRouter({
  routes,
  // mode: 'history',
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
