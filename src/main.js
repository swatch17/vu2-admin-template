import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/stores';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import "@/styles/main.scss"

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
