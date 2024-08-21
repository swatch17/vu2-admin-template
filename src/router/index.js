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
    component: Layout,
    name:'关于',
    meta: { title: '关于-1' },
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: { title: '关于-2' },
        children: [
          {
            path: 'detail',
            name: 'AboutDetail',
            component: () => import('@/views/about/detail/index.vue'),
            meta: { title: '关于详情-3' },
          },
        ],
      },
    ],
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
