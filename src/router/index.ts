import { createRouter, createWebHistory } from 'vue-router';
import PersonalityTest from '@/pages/PersonalityTest.vue';
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/test',
      name: 'test',
      component: PersonalityTest,
    },
  ],
});

export default router;
