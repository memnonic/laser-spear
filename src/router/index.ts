import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { BurialsView, FraternitiesView, MapView } from '@/modules'
import { parseGoogleMapsState } from '@/modules/Map/utils/parseGoogleMapsState.ts'
import type { MapRouteState } from '@/types.ts'
import { formatGoogleMapsState } from '@/modules/Map/utils/formatGoogleMapsState.ts'
import { DEFAULT_MAP_STATE } from '@/const.ts'
import CemeteriesList from '@/modules/cemeteries/CemeteriesList/CemeteriesList.vue'
import CemeteryDetails from '@/modules/cemeteries/CemeteryDetails/CemeteryDetails.vue'
import CemeteriesIndex from '@/modules/cemeteries/CemeteriesIndex.vue'
import { SUPPORTED_LANGS } from '@/plugins/i18n.plugin.ts'

export function isSupportedLang(lang: string | null): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return SUPPORTED_LANGS.includes(lang as any)
}

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      /* Root bez języka - wtedy redirect */
      path: '/',
      redirect: () => {
        const stored = localStorage.getItem('lang')
        const browser = navigator.language.slice(0, 2)

        const lang = isSupportedLang(stored) ? stored : isSupportedLang(browser) ? browser : 'pl'

        return `/${lang}`
      },
    },
    {
      path: '/:lang(pl|en|de|lv|ee|ru)',
      redirect: (to) => ({
        name: 'map',
        params: {
          lang: to.params.lang,
          state: formatGoogleMapsState(DEFAULT_MAP_STATE),
        },
      }),
      children: [
        {
          path: 'map/@:state',
          name: 'map',
          component: MapView,
          props: (route): MapRouteState => parseGoogleMapsState(route.params.state),
        },

        {
          path: 'fraternities',
          name: 'fraternities',
          component: FraternitiesView,
        },

        {
          path: 'burials',
          name: 'burials',
          component: BurialsView,
        },

        {
          path: 'cemeteries',
          component: CemeteriesIndex,
          children: [
            {
              path: '',
              name: 'cemeteries-list',
              component: CemeteriesList,
            },
            {
              path: ':slug',
              name: 'cemetery-details',
              component: CemeteryDetails,
              props: true,
            },
          ],
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/pl',
    },
  ],
})
