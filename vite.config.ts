import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const defaultConfig = {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({
        sassVariables: fileURLToPath(new URL('./src/quasar-variables.scss', import.meta.url)),
      }),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }

  if (command === 'build') {
    return {
      ...defaultConfig,
      base: '/laser-spear/',
    }
  }

  return defaultConfig;
})
