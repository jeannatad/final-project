import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/Footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home',
      },
      {
        path: 'home',
        component: () => import('@/views/Tab1Page.vue'),
      },
      {
        path: 'foryou',
        component: () => import('@/views/Foryou.vue'),
      },
      {
        path: 'search',
        component: () => import('@/views/Tab2Page.vue'),
      },
      {
        path: 'upload',
        component: () => import('@/views/Tab3Page.vue'),
      },
      {
        path: 'chat',
        component: () => import('@/views/inbox.vue'),
      },
      {
        path: 'profile',
        component: () => import('@/views/Tab5Page.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
