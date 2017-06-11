const headerMenu = [
  {
    iconClass: 'person',
    menuText: '推荐',
    url: '/home'
  },
  {
    iconClass: 'person_add',
    menuText: '优创+',
    url: '/home1'
  },
  {
    iconClass: 'store',
    menuText: '直播',
    url: '/home2'
  },
  {
    iconClass: 'person_add',
    menuText: '说客',
    url: '/login'
  },
  {
    iconClass: 'person_add',
    menuText: '原创',
    url: '/home4'
  },
  {
    iconClass: 'person_add',
    menuText: '图片',
    url: '/home5'
  },
  {
    iconClass: 'person_add',
    menuText: '话题',
    url: '/home6'
  },
  {
    iconClass: 'person_add',
    menuText: '游记',
    url: '/home7'
  },
  {
    iconClass: 'person_add',
    menuText: '视频',
    url: '/home7'
  },
  {
    iconClass: 'person_add',
    menuText: '行情',
    url: '/home7'
  },
  {
    iconClass: 'person_add',
    menuText: '口碑',
    url: '/home7'
  }
];

export default {
  state: {
    headerMenu
  },
  getters: {
    getHeaderMenu(state) {
      return state.headerMenu;
    }
  }
};
