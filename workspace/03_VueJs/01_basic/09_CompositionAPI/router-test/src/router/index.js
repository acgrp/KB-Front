import { createRouter, createWebHistory } from 'vue-router';

import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import Members from '@/pages/Members.vue';
import MemberInfo from '@/components/MemberInfo.vue';
import Videos from '@/pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 브라우저의 뒤로가기/앞으로가기 기능을 연결합니다.????

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // 주소가 '/'면 Home 페이지를 보여줍니다.

    {
      path: '/about',
      name: 'about',
      component: About,
    },
    // 주소가 '/about'이면 About 페이지를 보여줍니다.

    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    // 주소가 '/members'이면 Members 페이지를 보여줍니다.

    {
      path: '/members/1001',
      name: 'memberInfo',
      component: MemberInfo,
    },

    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },
    // 주소가 '/videos'이면 Videos 페이지를 보여줍니다.
  ],
});

export default router;
