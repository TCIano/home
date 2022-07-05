//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//关闭Vue的生产提示
Vue.config.productionTip = false;

import './assets/style/base.css'
import './assets/style/index.css'

//创建vm
new Vue({
  render: (h) => h(App),
}).$mount('#app');
