<script setup lang="ts">
import i18n from '@/plugins/i18n.plugin.ts'

interface Props {
  title: string
  subtitle?: string
  hasSearch?: boolean
  searchPlaceholder?: string
  hasFilter?: boolean
}

withDefaults(defineProps<Props>(), {
  subtitle: '',
  searchPlaceholder: '',
})
</script>

<template>
  <header class="view-header">
    <div class="view-header-inner">
      <div class="view-title-group">
        <h1 class="view-title">{{ title }}</h1>
        <p v-if="!!subtitle" class="view-subtitle">{{ subtitle }}</p>
      </div>

      <div class="view-actions">
        <input
          v-if="hasSearch"
          type="search"
          :placeholder="searchPlaceholder"
          class="view-search"
        />
        <button v-if="hasFilter" class="view-filter">{{ i18n.t('pageTop.filters') }}</button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.view-header {
  border-bottom: 1px solid var(--color-border-default);
  padding: var(--space-xl) var(--space-xl) var(--space-lg);

  .view-header-inner {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--space-xl);

    .view-title-group {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);

      .view-title {
        margin: 0;
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-semibold);
        letter-spacing: 0.01em;
      }

      .view-subtitle {
        margin: 0;
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
      }
    }

    .view-actions {
      display: flex;
      align-items: center;
      gap: var(--space-md);

      .view-search {
        font-size: var(--font-size-sm);
        padding: var(--space-sm) var(--space-md);
        border: 1px solid var(--color-border-default);
        background: var(--color-background-primary);
        width: 360px;
      }

      .view-filter {
        font-size: var(--font-size-sm);
        padding: var(--space-sm) var(--space-md);
        border: 1px solid var(--color-border-default);
        background: transparent;
        color: var(--color-text-secondary);
      }
    }
  }
}
</style>
