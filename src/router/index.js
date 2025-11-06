import{ createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/line',
    name: 'LineViews',
    component: () => import('@/views/LineViews.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;