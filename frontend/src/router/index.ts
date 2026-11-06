
import { createRouter, createWebHistory } from 'vue-router'

import UniversitiesView from '../views/UniversitiesView.vue'
import MajorsView from '../views/MajorsView.vue'
import FindMyMajorView from '../views/FindMyMajorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/universities',
    },
    {
      path: '/universities',
      name: 'universities',
      component: UniversitiesView,
    },
    {
      path: '/majors',
      name: 'majors',
      component: MajorsView,
    },
    {
      path: '/find-my-major',
      name: 'find-my-major',
      component: FindMyMajorView,
    },
  ],
})

export default router
