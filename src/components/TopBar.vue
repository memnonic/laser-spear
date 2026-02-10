<script setup lang="ts">
import { useTheme } from '@/composables/useTheme.ts'
import { useLanguage } from '@/composables/useLanguage.ts'
import { useMapStore } from '@/stores/map/map.ts'
import { computed } from 'vue'
import { DEFAULT_MAP_STATE } from '@/const.ts'
import { formatGoogleMapsState } from '@/modules/Map/utils/formatGoogleMapsState.ts'
import i18n from '@/plugins/i18n.plugin.ts'

const { theme, toggleTheme } = useTheme()
const { currentLang, availableLangs, setLanguage } = useLanguage()
const mapStore = useMapStore()

const navLinks = computed(() => [
  {
    text: i18n.t('topNav.link.map'),
    to: {
      name: 'map',
      params: {
        lang: currentLang.value,
        state: mapStore.lastState ?? formatGoogleMapsState(DEFAULT_MAP_STATE),
      },
    },
  },
  {
    text: i18n.t('topNav.link.fraternities'),
    to: { name: 'fraternities', params: { lang: currentLang.value } },
  },
  {
    text: i18n.t('topNav.link.cemeteries'),
    to: { name: 'cemeteries-list', params: { lang: currentLang.value } },
  },
  {
    text: i18n.t('topNav.link.burials'),
    to: { name: 'burials', params: { lang: currentLang.value } },
  },
])

function onChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLanguage(value as any)
}
</script>

<template>
  <header class="app-header">
    <div class="app-header-left">
      <span class="app-title">Laser Spear</span>
    </div>

    <div class="app-header-right">
      <input
        type="search"
        :placeholder="i18n.t('topNav.globalSearch.placeholder')"
        class="global-search"
      />

      <div class="app-controls">
        <select :value="currentLang" class="app-select" @change="onChange">
          <option v-for="lang in availableLangs" :key="lang" :value="lang">
            {{ lang.toUpperCase() }}
          </option>
        </select>

        <button class="theme-toggle" @click="toggleTheme">
          {{ theme === 'dark' ? '☀' : '☾' }}
        </button>
      </div>
    </div>
  </header>

  <nav class="app-nav">
    <RouterLink v-for="link in navLinks" :key="link.to.name" :to="link.to" class="nav-item">{{
      link.text
    }}</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) var(--space-xl);
  background: var(--color-background-surface);
  border-bottom: 1px solid var(--color-border-default);

  .app-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0.02em;
  }

  .app-header-right {
    display: flex;
    gap: var(--space-md);

    .global-search {
      font-size: var(--font-size-sm);
      padding: var(--space-sm) var(--space-md);
      border: 1px solid var(--color-border-default);
      background: var(--color-background-primary);
      width: 280px;
    }

    .app-controls {
      display: flex;
      gap: var(--space-md);

      .app-select {
        font-family: var(--font-family-sans);
        font-size: var(--font-size-xs);
        background: transparent;
        border: 1px solid var(--color-border-default);
        padding: var(--space-2xs) var(--space-xs);
        color: var(--color-text-primary);
      }

      .theme-toggle {
        font-family: var(--font-family-sans);
        font-size: 16px; /* nie za duże */
        background: none;
        border: none;
        color: var(--color-text-secondary);
        cursor: pointer;
        line-height: 1;

        &:hover {
          color: var(--color-text-primary);
        }
      }
    }
  }
}

.app-nav {
  display: flex;
  gap: var(--space-xl);
  padding: var(--space-md) var(--space-xl);
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-background-primary);

  .nav-item {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    text-decoration: none;
    padding-bottom: 4px;
    position: relative;

    &.router-link-active {
      color: var(--color-text-primary);

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: var(--color-text-primary);
      }
    }
  }
}
</style>
