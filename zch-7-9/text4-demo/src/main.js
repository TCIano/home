import Vue from 'vue'
import App from './App.vue'
import UI_Router from '@/views/UI_Router.vue'
import Contacts from '@/views/Contacts.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import All_contacts from '@/views/Second/All_contacts.vue'
import Alice from '@/views/Second/Alice.vue'
import Bob from '@/views/Second/Bob.vue'
import blog from '@/views/Second/blog.vue'
import fax from '@/views/Second/fax.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: "/ui_router"},
  { path: '/ui_router', component: UI_Router},
  { path: '/contacts', component: Contacts,
    children: [
      { path:'all_contacts', component: All_contacts},
      { path:'alice', component: Alice},
      { path:'bob', component: Bob,
        children: [
          {path: 'blog', component: blog},
          {path: 'fax', component: fax},
        ]},
    ]},
  { path: '/about', component: About},
  { path: '*', component: NotFound}
]

const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
