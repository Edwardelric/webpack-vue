import * as types from './mutations-types';

export default {
  [types.INCREMENT]({commit}) {
    commit(types.INCREMENT);
  },
  [types.DECREMENT]({commit}) {
    commit(types.DECREMENT);
  }
};
