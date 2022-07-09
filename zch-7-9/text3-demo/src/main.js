import Vue from 'vue'
import App from './App.vue'
import MyGoodsList from '@/views/MyGoodsList'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyUserInfo from '@/views/MyUserInfo'
import NotFound from '@/views/NotFound.vue'
// 引入
import VueRouter from 'vue-router'

// 注册全局组件
Vue.use(VueRouter)
// 规则数组
const routes = [
  {path: '/', redirect: "/mygoodslist"},
  {path: '/mygoodslist', component: MyGoodsList},
  {path: '/mygoodssearch', component: MyGoodsSearch},
  {path: '/myuserinfo', component: MyUserInfo},
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
