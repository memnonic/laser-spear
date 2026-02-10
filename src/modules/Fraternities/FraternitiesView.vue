<script setup lang="ts">
import fraternities from '@/staticData/fraternities.ts'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageTopBar from '@/components/PageTopBar.vue'
import i18n from '@/plugins/i18n.plugin.ts'

const router = useRouter()
const query = ref('')

const filteredFraternities = computed(() => {
  if (!query.value) return fraternities

  const q = query.value.toLowerCase()
  return fraternities.filter((f) => f.name.toLowerCase().includes(q))
})

function goToFraternity(id: string) {
  router.push({ name: 'fraternity-detail', params: { id } })
}
</script>

<template>
  <section class="fraternities-view">
    <PageTopBar
      :title="i18n.t('fraternities.page.title')"
      :subtitle="i18n.t('fraternities.page.subtitle')"
      :search-placeholder="i18n.t('fraternities.page.search.placeholder')"
      has-search
      has-filter
    />

    <div class="view-content">
      <ul class="fraternities-list">
        <li
          v-for="fraternity in filteredFraternities"
          :key="fraternity.id"
          class="fraternity-row"
          @click="goToFraternity(fraternity.id)"
        >
          <div class="fraternity-left">
            <span class="fraternity-name">
              {{ fraternity.name }}
            </span>

            <span v-if="fraternity.motto" class="fraternity-motto"> "{{ fraternity.motto }}" </span>

            <span class="fraternity-meta">
              <span class="fraternity-meta-item">
                {{ i18n.t('fraternities.page.entry.colors') }} {{ fraternity.colors.join(' - ') }}
              </span>

              <span class="fraternity-meta-item">
                {{ fraternity.foundedIn }}
              </span>

              <span class="fraternity-meta-item">
                {{ fraternity.founded }}
              </span>

              <span
                class="fraternity-status"
                :class="fraternity.isActive ? 'is-active' : 'is-inactive'"
              >
                {{
                  fraternity.isActive
                    ? i18n.t('fraternities.page.entry.activity.active')
                    : i18n.t('fraternities.page.entry.activity.inactive')
                }}
              </span>
            </span>
          </div>

          <span class="fraternity-count"> {{ i18n.t('common.burials', fraternity.burials ?? 2137) }} </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* =========================
   Layout
   ========================= */

.fraternities-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header – ten sam pattern */

.view-header {
  border-bottom: 1px solid var(--color-border-default);
  padding: var(--space-xl) var(--space-xl) var(--space-lg);
}

.view-header-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.view-title-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.view-title {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.view-subtitle {
  margin: 0;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* =========================
   Content
   ========================= */

.view-content {
  max-width: 960px;
  width: 960px;
  margin: 0 auto;
  padding: var(--space-lg) var(--space-xl);
}

/* =========================
   Filter
   ========================= */

.fraternities-filter {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--space-md);
}

.fraternities-search {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);
  padding: var(--space-xs) var(--space-sm);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-primary);
  width: 260px;
}

.fraternities-count {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* =========================
   List
   ========================= */

.fraternities-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.fraternity-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  cursor: pointer;

  &:hover {
    background: var(--color-background-subtle);
  }
}

.fraternity-row + .fraternity-row {
  margin-top: var(--space-2xs);
}

/* Left stack */

.fraternity-left {
  display: flex;
  flex-direction: column;
}

/* Name */

.fraternity-name {
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
}

.fraternity-motto {
  margin-top: var(--space-2xs);
  font-family: var(--font-family-serif);
  font-size: var(--font-size-xs);
  font-style: italic;
  color: var(--color-text-muted);
  line-height: 1.4;
}

/* Meta */

.fraternity-meta {
  margin-top: var(--space-2xs);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.fraternity-meta-item:not(:last-child)::after {
  content: '·';
  margin-left: var(--space-xs);
  color: var(--color-text-muted);
}

/* Right meta */

.fraternity-count {
  margin-left: auto;
  text-align: right;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  white-space: nowrap;
}

/* Status */

.fraternity-status {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

/* Active */

.fraternity-status.is-active {
  color: var(--color-semantic-active); /* przygaszona zieleń */
}

/* Inactive */

.fraternity-status.is-inactive {
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
