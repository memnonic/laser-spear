import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages,
  flatJson: true,
  globalInjection: true,
})

export default { plugin: i18n, t: i18n.global.t, te: i18n.global.te, n: i18n.global.n }
