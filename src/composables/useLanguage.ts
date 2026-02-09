import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LANGS, type Lang } from '@/plugins/i18n.plugin.ts'
import { isSupportedLang } from '@/router'

const STORAGE_KEY = 'lang'

export function useLanguage() {
  const route = useRoute()
  const router = useRouter()
  const { locale } = useI18n()

  const currentLang = computed<Lang>(() => locale.value as Lang)

  function resolveInitialLanguage() {
    const fromUrl = route.params.lang as string
    if (isSupportedLang(fromUrl)) return fromUrl

    const fromStorage = localStorage.getItem(STORAGE_KEY)
    if (isSupportedLang(fromStorage || '')) return fromStorage!

    const fromBrowser = navigator.language.slice(0, 2)
    if (isSupportedLang(fromBrowser)) return fromBrowser

    return 'pl'
  }

  function setLanguage(lang: Lang) {
    if (!isSupportedLang(lang)) return

    locale.value = lang
    localStorage.setItem(STORAGE_KEY, lang)

    if (route.params.lang !== lang) {
      router.replace({
        name: route.name as string,
        params: {
          ...route.params,
          lang,
        },
        query: route.query,
      })
    }
  }

  watch(
    () => route.params.lang,
    (lang) => {
      if (isSupportedLang(lang as string)) {
        locale.value = lang as Lang
        localStorage.setItem(STORAGE_KEY, lang as string)
      }
    },
    { immediate: true },
  )

  return {
    currentLang,
    availableLangs: SUPPORTED_LANGS,
    setLanguage,
    resolveInitialLanguage,
  }
}
