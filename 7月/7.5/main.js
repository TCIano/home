//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//关闭Vue的生产提示
Vue.config.productionTip = false;

import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';
Vue.prototype.$axios = axios;

//创建vm
new Vue({
  render: (h) => h(App),
}).$mount('#app');
