import { createI18n } from 'vue-i18n'

import pl from '@/locales/pl.json'
import en from '@/locales/en.json'
import de from '@/locales/de.json'
import lv from '@/locales/lv.json'
import ee from '@/locales/ee.json'
import ru from '@/locales/ru.json'
import lt from '@/locales/lt.json'

export const SUPPORTED_LANGS = ['pl', 'en', 'de', 'lv', 'ee', 'ru', 'lt'] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]

const i18n = createI18n({
  legacy: false,
  locale: 'pl',
  fallbackLocale: 'en',
  messages: { pl, en, de, lv, ee, ru, lt },
  flatJson: true,
  globalInjection: true,
})

export default { plugin: i18n, t: i18n.global.t, te: i18n.global.te, n: i18n.global.n }
