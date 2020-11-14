import Vue from 'vue'
import './plugins/axios'
import router from "./router";
import App from "./App";
import axios from 'axios'

Vue.prototype.$http = axios

import "./common/plugins/bootstrap-vue";
import { store } from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
