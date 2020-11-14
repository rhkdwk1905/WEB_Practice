import Vue from 'vue'
import './plugins/axios'
import router from "./router";
import App from "./App";
import axios from 'axios'
import "./common/plugins/bootstrap-vue";
import { store } from './store'

Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
