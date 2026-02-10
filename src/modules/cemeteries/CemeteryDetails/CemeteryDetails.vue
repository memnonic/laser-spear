<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import cemeteries from '@/staticData/cemeteries.ts'
import burials from '@/staticData/burials.ts'
import i18n from '@/plugins/i18n.plugin.ts'

const route = useRoute()

const cemetery = computed(() =>
  cemeteries.find((cemetery) => cemetery.id === String(route.params.slug)),
)

const tabs = ['info', 'burials', 'stats'] as const
const activeTab = ref<(typeof tabs)[number]>('info')

const burialQuery = ref('')

const descriptionInParts = computed(() => cemetery.value?.notes?.split('\n\n'))

const filteredBurials = computed(() => {
  if (!burialQuery.value) {
    return burials.sort((left, right) => left.surname.localeCompare(right.surname))
  }

  const q = burialQuery.value.toLowerCase()
  return burials
    .filter((b) => `${b.surname} ${b.firstName}`.toLowerCase().includes(q))
    .sort((left, right) => left.surname.localeCompare(right.surname))
})
</script>

<template>
  <section class="cemetery-detail">
    <!-- Header -->
    <header class="detail-header">
      <div class="detail-header-inner">
        <h1 class="cemetery-title">
          {{ cemetery.name }}
        </h1>

        <p class="cemetery-subtitle">
          {{ cemetery.city }}
          · {{ cemetery.founded ?? 1848 }}–{{ cemetery.closed ?? i18n.t('common.today') }}
        </p>

        <nav class="detail-tabs" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="detail-tab"
            :class="{ 'is-active': activeTab === tab }"
            role="tab"
            :aria-selected="activeTab === tab"
            @click="activeTab = tab"
          >
            {{ i18n.t(`cemeteryDetails.page.tabs.${tab}`) }}
          </button>
        </nav>
      </div>
    </header>

    <!-- Content -->
    <div class="detail-content">
      <!-- Description -->
      <section v-if="activeTab === 'info'" class="detail-section">
        <p
          class="cemetery-description"
          v-for="(part, index) in descriptionInParts"
          :key="`${String(route.params.slug)}--${index}`"
        >
          {{ part }}
        </p>

        <h2 class="section-title">{{ i18n.t('cemeteryDetails.page.info.subtitle') }}</h2>

        <dl class="facts-list">
          <div class="fact">
            <dt>{{ i18n.t('cemeteryDetails.page.info.established') }}</dt>
            <dd>{{ cemetery.founded ?? 1848 }}</dd>
          </div>

          <div class="fact">
            <dt>{{ i18n.t('cemeteryDetails.page.info.status') }}</dt>
            <dd>{{ cemetery.status ?? i18n.t('cemeteryDetails.page.info.status.active') }}</dd>
          </div>

          <div class="fact">
            <dt>{{ i18n.t('cemeteryDetails.page.info.burials') }}</dt>
            <dd>{{ cemetery.burialsCount ?? 2137 }}</dd>
          </div>
        </dl>
      </section>

      <!-- POCHÓWKI -->
      <!-- POCHÓWKI -->
      <section v-if="activeTab === 'burials'" class="detail-section">
        <ul class="burials-list two-columns">
          <li v-for="burial in filteredBurials" :key="burial.id" class="burial-row">
            <!-- LINE 1 -->
            <span class="burial-name"> {{ burial.surname }} {{ burial.firstName }} </span>

            <!-- LINE 2: META -->
            <span class="burial-meta">
              <span v-if="burial.fraternities?.length">
                {{ burial.fraternities.join(', ') }}
              </span>
              <span v-if="burial.fraternities?.length"> · </span>
              <span> {{ burial.dateOfBirth }} – {{ burial.dateOfDeath }} </span>
            </span>
          </li>
        </ul>
      </section>

      <!-- STATYSTYKI -->
      <section v-if="activeTab === 'stats'" class="detail-section">
        <p class="placeholder">{{ i18n.t('cemeteryDetails.page.stats.placeholder') }}</p>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* =========================
   Layout
   ========================= */

.cemetery-detail {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* =========================
   Header
   ========================= */

.detail-header {
  border-bottom: 1px solid var(--color-border-default);
  padding: var(--space-xl) var(--space-xl) var(--space-lg);
}

.detail-header-inner {
  max-width: 960px;
  margin: 0 auto;
}

.cemetery-title {
  margin: 0;
  font-family: var(--font-family-serif);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
}

.cemetery-subtitle {
  margin: var(--space-xs) 0 var(--space-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

/* =========================
   Tabs
   ========================= */

.detail-tabs {
  display: flex;
  gap: var(--space-lg);
}

.detail-tab {
  background: none;
  border: none;
  padding: var(--space-xs) 0;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  cursor: pointer;
  position: relative;

  &:hover {
    color: var(--color-text-primary);
  }
}

.detail-tab.is-active {
  color: var(--color-text-primary);
}

.detail-tab.is-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background: var(--color-border-strong);
}

/* =========================
   Content
   ========================= */

.detail-content {
  max-width: 960px;
  width: 960px;
  margin: 0 auto;
  padding: var(--space-lg) var(--space-xl);
}

.detail-section {
  animation: fadeIn 120ms ease-out;
}

.detail-section + .detail-section {
  margin-top: var(--space-xl);
}

/* Description */

.cemetery-description {
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  line-height: 1.6;
}

/* =========================
   Section titles
   ========================= */

.section-title {
  margin: 0 0 var(--space-sm);
  font-size: var(--font-size-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

/* =========================
   Facts
   ========================= */

.facts-list {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: var(--space-sm);
  column-gap: var(--space-lg);
}

.fact dt {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.fact dd {
  margin: 0;
  font-size: var(--font-size-sm);
}

/* =========================
   Links
   ========================= */

.section-link {
  font-size: var(--font-size-sm);
  text-decoration: underline;
  color: var(--color-text-primary);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* =========================
   Burials filter
   ========================= */

.burials-filter {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--space-md);
}

.burials-search {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);
  padding: var(--space-xs) var(--space-sm);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-primary);
  width: 240px;
}

.burials-count {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* =========================
   Burial row (rozszerzony)
   ========================= */

.burials-list.two-columns {
  column-gap: var(--space-xl);
  row-gap: var(--space-sm);
  padding: 0;
  width: 100%;
  column-count: 2;
}

.burial-row {
  display: flex;
  flex-direction: column;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  cursor: pointer;
  width: auto !important;

  &:hover {
    background: var(--color-background-subtle);
  }
}

//.burial-row + .burial-row {
//  margin-top: var(--space-2xs);
//}

/* Left side stack */

.burial-main {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
}

/* Name */

.burial-name {
  font-family: var(--font-family-serif);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
}

.burial-meta {
  margin-top: var(--space-2xs);
  font-family: var(--font-family-sans); /* ⬅ jak burial-dates */
  font-size: var(--font-size-xs); /* ⬅ jak burial-dates */
  color: var(--color-text-secondary); /* ⬅ jak burial-dates */
  line-height: 1.4;
}

/* Small meta */

.burial-meta-small {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-2xs);
  color: var(--color-text-muted);
  white-space: nowrap;
}

/* Dates (right aligned) */

.burial-dates {
  margin-left: auto;
  text-align: right;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  white-space: nowrap;
}
</style>
