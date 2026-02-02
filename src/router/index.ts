import { createRouter, createWebHistory } from 'vue-router'
import { BurialsView, FraternitiesView, MapView } from '@/views'
import { parseGoogleMapsState } from '@/views/Map/utils/parseGoogleMapsState.ts'
import type { MapRouteState } from '@/types.ts'
import { formatGoogleMapsState } from '@/views/Map/utils/formatGoogleMapsState.ts'
import { DEFAULT_MAP_STATE } from '@/const.ts'

function numOrUndef(v: unknown) {
  const n = Number(v)
  return Number.isFinite(n) ? n : undefined
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => ({
        name: 'map',
        params: {
          state: formatGoogleMapsState(DEFAULT_MAP_STATE),
        },
      }),
    },
    {
      path: '/map/@:state',
      name: 'map',
      component: MapView,
      props: (route): MapRouteState => parseGoogleMapsState(route.params.state),
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
