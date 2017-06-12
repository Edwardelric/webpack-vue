import Vue from 'vue';
import axios from 'axios';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import moment from 'moment';
import App from './App';
import api from './common/api';
import router from './router/router';
import store from './store';
import 'static/styles/iconfont/iconfont.scss';

Vue.use(MuseUI);

Vue.prototype.api = api;

Vue.filter('dateFormat', function(val) {
  return moment(val).format('YYYY年MM月DD日');
});

Vue.filter('priceFormat', function(val) {
  var n = Math.abs(parseFloat(val)).toFixed(2);
  return '￥' + n.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
});

axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    store.dispatch('showLoading');
    config.headers['x-cert-uid'] = window.sessionStorage.getItem('uid') || 0;
    config.headers['x-cert-token'] = window.sessionStorage.getItem('token') || '';
    return config;
  },
  err => {
    store.dispatch('hideLoading');
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  response => {
    store.dispatch('hideLoading');
    return response.data;
  },
  err => {
    if (err.response) {
      switch (err.response.status) {
        case 200:
          router.replace({
            path: '/login'
          });
          break;
        case 404:
          console.log('404');
          break;
        case 500:
          console.log('500');
          break;
      }
      store.dispatch('hideLoading');
      return Promise.reject(err.response.data);
    } else {
      store.dispatch('hideLoading');
    }
  }
);

Vue.prototype.$http = function(method, url, cb) {
  if (window.localStorage.getItem('user')) {
    router.push({path: '/login'});
  } else {
    axios({
      'url': url,
      'method': method
    }).then((response) => {
      cb(response);
    });
  }
};

new Vue({
  template: '<App/>',
  router,
  store,
  components: {App}
}).$mount('#app');
