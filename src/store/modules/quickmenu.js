const quickMenu = [
  {
    iconClass: 'android',
    menuText: '新车特卖',
    url: '/home'
  },
  {
    iconClass: 'android',
    menuText: '分期购车',
    url: '/home1'
  },
  {
    iconClass: 'android',
    menuText: '二手车',
    url: '/home2'
  },
  {
    iconClass: 'android',
    menuText: '低价车险',
    url: '/login'
  },
  {
    iconClass: 'android',
    menuText: '车主服务',
    url: '/home4'
  }
];

export default {
  state: {
    quickMenu
  },
  getters: {
    getQuickMenu(state) {
      return state.quickMenu;
    }
  }
};
