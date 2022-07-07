import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局指令 - 到处"直接"使用
Vue.directive("gfocus", {
  inserted(el) {
    el.focus() // 触发标签的事件方法
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
