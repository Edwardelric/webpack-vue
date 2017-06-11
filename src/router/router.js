import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const title = '汽车之家';

const home = r => require.ensure([], () => r(require('page/home/home')), 'home');
const login = r => require.ensure([], () => r(require('page/login/login')), 'login');
const routes = [
  {
    path: '/home',
    component: home,
    meta: {
      title: '汽车之家首页',
      requireAuth: false
    }
  },
  {
    path: '/login',
    component: login,
    meta: {
      title: 'vue登录页',
      requireAuth: false
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : title;
  // 判断是否有权限可以访问详情页,如没有,则登录
  if (window.localStorage.getItem('user')) {
    next();
  } else {
    if (to.meta.requireAuth) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  }
  next();
});

export default router;

