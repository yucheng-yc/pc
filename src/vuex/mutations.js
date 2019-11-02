import * as types from './mutationsType';

export default {
  [types.changeUserInfo] (state, {uname,uphone,upwd}) {
    state.userInfo.uname = uname;
    state.userInfo.uphone = uphone;
    state.userInfo.upwd = upwd;
  },
  [types.SETERROR] (state, payload) {
    state.errors = payload;
  },

  [types.COUNTASYNC] (state, payload) {
    state.counts = payload;
  }
}