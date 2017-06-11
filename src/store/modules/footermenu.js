const footerMenu = [
  {
    iconClass: 'home',
    menuText: '首页',
    url: '/home'
  },
  {
    iconClass: 'chat',
    menuText: '论坛',
    url: '/home1'
  },
  {
    iconClass: 'store',
    menuText: '选车',
    url: '/home2'
  },
  {
    iconClass: 'visibility',
    menuText: '发现',
    url: '/login'
  },
  {
    iconClass: 'account_circle',
    menuText: '我',
    url: '/home4'
  }
];

export default {
  state: {
    footerMenu
  },
  getters: {
    getFooterMenu(state) {
      return state.footerMenu;
    }
  }
};
