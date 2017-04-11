import * as types from './mutations-types';

export default {
  [types.INCREMENT](state) {
    console.log('count');
    state.count++;
  },
  [types.DECREMENT](state) {
    state.count--;
  }
};
