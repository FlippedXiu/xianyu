import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import "@/assets/css/base.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "@/network/axios";

Vue.use(ElementUI);

Vue.config.productionTip = false
axios.defaults.withCredentials = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
