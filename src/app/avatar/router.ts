import { createRouter, createWebHashHistory } from 'vue-router';

/** 头像管理系统路由 */
export const avatarRouter = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/project/avatar/home/index.vue'),
      children: [],
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/project/avatar/mine/index.vue'),
      children: [],
    },
  ],
});
