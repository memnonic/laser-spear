<script setup lang="ts">
import burials from '@/staticData/burials.ts'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageTopBar from '@/components/PageTopBar.vue'
import i18n from '@/plugins/i18n.plugin.ts'

const router = useRouter()
const query = ref('')

const filteredBurials = computed(() => {
  if (!query.value) return burials

  const q = query.value.toLowerCase()
  return burials.filter((b) => `${b.surname} ${b.firstName}`.toLowerCase().includes(q))
})

function goToBurial(id?: string) {
  router.push({ name: 'burial-detail', params: { id } })
}
</script>

<template>
  <section class="burials-view">
    <PageTopBar
      :title="i18n.t('burials.page.title')"
      :subtitle="i18n.t('burials.page.subtitle')"
      :search-placeholder="i18n.t('burials.page.search.placeholder')"
      has-search
      has-filter
    />

    <!-- Content -->
    <div class="view-content">
      <!-- List -->
      <ul class="burials-list">
        <li
          v-for="burial in filteredBurials"
          :key="burial.id"
          class="burial-row"
          @click="goToBurial(burial.id)"
        >
          <div class="burial-left">
            <span class="burial-name"> {{ burial.surname }} {{ burial.firstName }} </span>

            <span class="burial-meta">
              <span v-if="burial.fraternities" class="burial-meta-item">
                {{ burial.fraternities.join(', ') }}
              </span>

              <span v-if="burial.cemetery" class="burial-meta-item">
                {{ burial.cemetery }}
              </span>
            </span>
          </div>

          <span class="burial-dates"> {{ burial.dateOfBirth }} – {{ burial.dateOfDeath }} </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* =========================
   View container
   ========================= */

.burials-view {
  flex: 1;
  display: flex;
  flex-direction: column;
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
  width: 260px;
}

.burials-count {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* =========================
   List
   ========================= */

.burials-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.burial-row {
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


.burial-row + .burial-row {
  margin-top: var(--space-2xs);
}

/* Left stack */

.burial-left {
  display: flex;
  flex-direction: column;
}

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

/* Small meta */

.burial-meta {
  margin-top: var(--space-2xs);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.burial-meta-item:not(:last-child)::after {
  content: '·';
  margin-left: var(--space-xs);
  color: var(--color-text-muted);
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
