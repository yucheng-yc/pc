import * as types from './mutationsType';

export default {
  [types.ADD] (state, payload) {
    state.add = payload;
  },
  [types.SETERROR] (state, payload) {
    state.errors = payload;
  },

  [types.COUNTASYNC] (state, payload) {
    state.counts = payload;
  }
}