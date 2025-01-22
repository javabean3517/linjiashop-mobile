import Vue from 'vue';
import App from './App';
import { router } from './router';
import VueLazyload from 'vue-lazyload'
import {Loading,Overlay,Tabbar,TabbarItem } from 'vant'
import VueClipboard from 'vue-clipboard2' //引入插件
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'svg/loading.svg',
  loading: 'svg/loading.svg',
  attempt: 1
}).use(Loading).use(Overlay ).use(Tabbar ).use(TabbarItem ).use(VueClipboard).use(Viewer)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
