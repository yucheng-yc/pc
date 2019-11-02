import Vue from 'vue'
import Vuex from 'vuex'


// 导入部分
import mutations from './vuex/mutations';
import state from './vuex/state';
import actions from './vuex/actions';
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
})
