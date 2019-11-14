import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import store from './store';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/login.vue')
    },
    {
      path:"/HomeLogin",
      name:"HomeLogin",
      component:()=>import("./views/HomeLogin.vue"),
      beforeEnter(to,from,next){
        if(store.state.userInfo.uphone==''){
          next('/');
        }else{
          next();
        }
        
      }
    }
  ]
})
