import { ref, watch } from 'vue'

type Theme = 'light' | 'dark'
const STORAGE_KEY = 'theme'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initialTheme =
  (localStorage.getItem(STORAGE_KEY) as Theme) ||
  (prefersDark ? 'dark' : 'light')

const theme = ref<Theme>(initialTheme)

export function useTheme() {
  function applyTheme(value: Theme) {
    document.documentElement.dataset.theme = value
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(
    theme,
    (value) => {
      localStorage.setItem(STORAGE_KEY, value)
      applyTheme(value)
    },
    { immediate: true }
  )

  return {
    theme,
    toggleTheme
  }
}
