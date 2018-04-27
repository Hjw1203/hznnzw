// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible'
import Mint from 'mint-ui'
import 'normalize.css'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import './assets/css/public.scss'
import axios from 'axios'

Vue.use(Mint);
Vue.prototype.token = 'xiaoxiao';
Vue.config.productionTip = false

Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
