import Vue from 'vue'
import App from './App.vue'
import Page from '@/views/Page.vue'
import Classify from '@/views/Classify.vue'
import Indent from '@/views/Indent.vue'
import My1 from '@/views/My1.vue'
import NotFound from '@/views/NotFound.vue'
// 引入
import VueRouter from 'vue-router'

// 注册全局组件
Vue.use(VueRouter)
// 规则数组
const routes = [
  {path: '/', redirect: "/page"},
  {path: '/page', component: Page},
  {path: '/classify', component: Classify},
  {path: '/indent', component: Indent},
  {path: '/my1', component: My1},
  { path: '*', component: NotFound}
]
// 生成路由对象
const router = new VueRouter({
  routes,
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')