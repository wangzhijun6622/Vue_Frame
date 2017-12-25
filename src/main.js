import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/'
import './config/rem'
// Vue.config.productionTip = false
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import { Header } from 'mint-ui';
// Vue.component(Header)

new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
