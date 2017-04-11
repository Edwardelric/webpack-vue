import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import router from './router/router';
import store from './store';
import 'element-ui/lib/theme-default/index.css';
import 'static/styles/iconfont/iconfont.scss';

Vue.use(VueResource);
Vue.use(ElementUI);

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
});

Vue.http.interceptors.push(function(request, next) {
  this.$store.state.isShowLoading = true;
  next(function(response) {
    this.$store.state.isShowLoading = false;
    console.log(this.$store.getters.name);
    return response;
  });
});

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  router,
  store,
  components: {App}
}).$mount('#app');
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });
