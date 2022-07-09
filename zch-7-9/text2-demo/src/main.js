import Vue from 'vue'
import App from './App.vue'
import Page from '@/views/Page.vue'
import News from '@/views/News.vue'
import Sports from '@/views/Sports.vue'
import NotFound from '@/views/NotFound.vue'
import NewsPage from '@/views/second/NewsPage.vue'
import Domestic from '@/views/second/Domestic.vue'
import Foreign from '@/views/second/Foreign.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: "/page"},
  { path: '/page', component: Page},
  { path: '/news', component: News},
  { path: '/sports', component: Sports ,
    children: [
      { path: 'newspage', component: NewsPage},
      { path: 'domestic', component: Domestic},
      { path: 'foreign', component: Foreign},
    ]},
  {path: '*', component: NotFound}

]

const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
