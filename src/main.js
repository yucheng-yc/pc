import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 插件引入
// axios
import axios from 'axios'
axios.defaults.baseURL='http://localhost:4444/';
axios.defaults.withCredentials=true;
axios.prototype.axios=axios;

// normalize.css 
import 'normalize.css';

// iconfont
import './assets/font/iconfont.css';

// 提示插件
import 'tippy.js/dist/tippy.css';
const tippy = require('tippy.js').default;

Vue.prototype.tippy=tippy;


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
