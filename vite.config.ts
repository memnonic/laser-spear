import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    ...(isProduction ? { base: '/laser-spear/' } : {}),
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({
        sassVariables: fileURLToPath(new URL('./src/quasar-variables.scss', import.meta.url)),
      }),
      VueI18nPlugin({
        include: 'src/locales/**',
        strictMessage: false,
        dropMessageCompiler: true,
      }),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
