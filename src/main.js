import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router/router';
import VueResource from 'vue-resource';

import 'static/styles/iconfont/iconfont.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

const title = '我的外卖项目';

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // 页面title拼接
  document.title = to.meta.title ? (title + to.meta.title) : title;
  next();
});
/* eslint-disable no-new */
new Vue({
  template: '<App>',
  router,
  components: {App}
}).$mount('#app');
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });
