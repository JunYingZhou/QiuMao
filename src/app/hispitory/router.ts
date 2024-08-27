import { createRouter, createWebHashHistory } from 'vue-router';

/** 医疗管理系统路由 */
export const hispitoryRouter = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/project/hispitory/home/index.vue'),
      children: [],
    },
  ],
});
