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

// element ui  ->全部引入 以后可以按需引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
