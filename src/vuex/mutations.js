import * as types from './mutationsType';

export default {
  [types.changeUserInfo] (state, {uname,uphone,upwd}) {
    state.userInfo.uname = uname;
    state.userInfo.uphone = uphone;
    state.userInfo.upwd = upwd;
  },
  // 用于修改登录状态
  [types.changenavstate] (state, {value}) {
    state.navInfo.navstate = value;
  },

  [types.COUNTASYNC] (state, payload) {
    state.counts = payload;
  }
}