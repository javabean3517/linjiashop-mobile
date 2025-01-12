import Vue from 'vue';
import App from './App';
import { router } from './router';
import VueLazyload from 'vue-lazyload'
import {Loading,Overlay,Tabbar,TabbarItem } from 'vant'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'svg/loading.svg',
  loading: 'svg/loading.svg',
  attempt: 1
}).use(Loading).use(Overlay ).use(Tabbar ).use(TabbarItem )
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
