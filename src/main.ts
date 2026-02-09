import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import VueMaplibreGl from '@indoorequal/vue-maplibre-gl'
import i18n from '@/plugins/i18n.plugin.ts'
import Vue3Dummy from 'vue3-dummy';

import 'maplibre-gl/dist/maplibre-gl.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import 'quasar/src/css/index.sass'
import '@/assets/tokens.css'

import App from './App.vue'

import { router } from './router'

const pinia = createPinia()

const app = createApp(App)

app.use(router)

app.use(pinia)

app.use(Quasar, {
  plugins: {},
})

app.use(VueMaplibreGl)

app.use(i18n.plugin)

app.use(Vue3Dummy)

app.mount('#app')
