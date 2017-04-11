import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  count: 0,
  isShowLoading: false,
  name: 'edward'
};

const moduleA = {
  state: {
    age: 'edward'
  },
  getters: {
    age1(state) {
      return state.age;
    }
  }
};
const moduleB = {
  state: {
    age: 'edwardelric'
  },
  getters: {
    age2(state) {
      return state.age;
    }
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA,
    b: moduleB
  }
});
