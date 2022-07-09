import Vue from 'vue'
import App from './App.vue'
import MyUserInfo from './views/MyUserInfo.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import NotFound from './views/NotFound.vue'
import MyHome from './views/MyHome.vue'
import MyClass from './views/MyClass.vue'
import MyOrder from './views/MyOrder.vue'
import MyMy from './views/MyMy.vue'
import MyPage from './views/MyPage.vue'
import MyNews from './views/MyNews.vue'
import MyPe from './views/MyPe.vue'
import PePage from './views/Second/PePage.vue'
import InPe from './views/Second/InPe.vue'
import OutPe from './views/Second/OutPe.vue'
import MyuiRouter from './views/MyuiRouter.vue'
import MyContacts from './views/MyContacts.vue'
import MyAbout from './views/MyAbout.vue'
import AllContacts from './views/Second/AllContacts.vue'
import MyAlice from './views/Second/MyAlice.vue'
import MyBob from './views/Second/MyBob.vue'
import MyBlog from './views/Second/Third/MyBlog.vue'
import MyFax from './views/Second/Third/MyFax.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'MyGoodsList'
  },
  {
    path: '/mygoodslist',
    component:MyGoodsList
  },
  {
    path: '/mygoodssearch',
    component:MyGoodsSearch
  },
  {
    path: '/myuserinfo',
    component:MyUserInfo
  },
  {
    path: '/myhome',
    component:MyHome
  },
  {
    path: '/myclass',
    component:MyClass
  },
  {
    path: '/myorder',
    component:MyOrder
  },
  {
    path: '/mymy',
    component:MyMy
  },
  {
    path: '/mypage',
    component:MyPage
  },
  {
    path: '/mynews',
    component:MyNews
  },
  {
    path: '/mype',
    component:MyPe,
    children:[
      {
      path:"/pepage",
      component: PePage
      },
      {
      path:"/inpe",
      component: InPe
      },
      {
      path:"/outpe",
      component: OutPe
      },
  ]
},
{
    path: '/myuirouter',
    component:MyuiRouter
  },
  {
    path: '/mycontacts',
    component:MyContacts,
    children:[
      {
        path:'/allcontacts',
        component:AllContacts
      },
      {
        path:'/myalice',
        component:MyAlice
      },
      {
        path:'/mybob',
        component:MyBob,
        children:[
          {
            path:'/myblog',
            component:MyBlog
          },
          {
            path:'/myfax',
            component:MyFax
          },
        ]
      },
    ]
  },
  {
    path: '/myabout',
    component:MyAbout
  },
  {
    path: "*",
    component: NotFound
  }
]
const router = new VueRouter({
  routes,
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
