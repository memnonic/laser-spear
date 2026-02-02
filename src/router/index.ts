import { createRouter, createWebHistory } from 'vue-router'
import { BurialsView, FraternitiesView, MapView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'map',
      component: MapView,
    },
    {
      path: '/fraternities',
      name: 'fraternities',
      component: FraternitiesView,
    },
    {
      path: '/burials',
      name: 'burials',
      component: BurialsView,
    },
  ],
})

export default router
