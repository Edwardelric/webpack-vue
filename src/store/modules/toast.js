const toastMsg = 'toast错误提示';

export default {
  state: {
    isToast: false,
    toastMsg: 'toast错误提示'
  },
  getters: {
    isToast(state) {
      return state.isToast;
    },
    getToastMsg(state) {
      return state.toastMsg;
    }
  },
  mutations: {
    setIsToast(state, msg) {
      state.isToast = !state.isToast;
      state.toastMsg = msg;
    }
  },
  actions: {
    setIsToast({commit}, msg = toastMsg) {
      setTimeout(() => {
        commit('setIsToast', msg);
      }, 200);
      setTimeout(() => {
        commit('setIsToast', msg);
      }, 2000);
    }
  }
};
