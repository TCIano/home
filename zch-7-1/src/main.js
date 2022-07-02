import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"

Vue.filter('toReverse', (val,splits) => {
  return val.split('').reverse().join(splits || '')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
