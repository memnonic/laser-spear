import { createRouter, createWebHistory } from 'vue-router'
import { BurialsView, FraternitiesView, MapView } from '@/views'

function numOrUndef(v: unknown) {
  const n = Number(v)
  return Number.isFinite(n) ? n : undefined
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'map',
      component: MapView,
      props: (route) => ({
        lat: numOrUndef(route.query.lat),
        lng: numOrUndef(route.query.lng),
        z: numOrUndef(route.query.z),
      }),
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
