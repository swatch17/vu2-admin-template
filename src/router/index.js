import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layouts/index.vue';

const routes = [
  {
    path: '/',

    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
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
