import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import axios from "axios"
axios.defaults.baseURL = "https://www.escook.cn"
Vue.prototype.$axios = axios

import checkArray from "./views/array"
Vue.directive("permission", {
  inserted (el, binding) {
    let permission = binding.value
    if (permission) {
      let hasPermission = checkArray(permission)
      if (!hasPermission) {
         el.parentNode.removeChild(el)
      }
    }
  }
})
Vue.directive("focus", {
  inserted(el) {
    el.focus()
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
