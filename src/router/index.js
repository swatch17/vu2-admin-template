import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '主页',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta: { title: '关于' },
  },
];

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
