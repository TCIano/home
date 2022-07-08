import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'

import { checkArray } from '../public/js/array.js'
Vue.directive("permission", {
  inserted (el, binding) {
    let permission = binding.value;
    if (permission){
      let hasPermission = checkArray(permission)
      if(!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
})

import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios

// 全局指令 - 到处"直接"使用
Vue.directive('focus', {
  inserted(el) {
    el.focus() // 触发标签的事件方法
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
