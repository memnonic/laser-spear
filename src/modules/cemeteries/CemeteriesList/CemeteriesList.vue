<script setup lang="ts">
import cemeteries from '@/staticData/cemeteries.ts'
import type { Cemetery } from '@/types.ts'
import { useRouter } from 'vue-router'
import PageTopBar from '@/components/PageTopBar.vue'
import i18n from '@/plugins/i18n.plugin.ts'

const router = useRouter()

/* ---------- helpers ---------- */

function slug(text: string) {
  return text
    .toLowerCase()
    .replace(/ł/g, 'l')
    .replace(
      /[ąćęńóśżź]/g,
      (c) => ({ ą: 'a', ć: 'c', ę: 'e', ń: 'n', ó: 'o', ś: 's', ż: 'z', ź: 'z' })[c]!,
    )
    .replace(/\s+/g, '-')
}

/* ---------- group cemeteries by city ---------- */

const cemeteriesByCity = Object.values(
  cemeteries.reduce<Record<string, { city: string; cemeteries: Cemetery[] }>>((acc, c) => {
    acc[c.city] ??= { city: c.city, cemeteries: [] }
    acc[c?.city]?.cemeteries.push(c)
    return acc
  }, {}),
)
  .map((group) => ({
    city: group.city,
    cemeteries: group.cemeteries.sort((a, b) => a.name.localeCompare(b.name, 'pl')),
  }))
  .sort((a, b) => a.city.localeCompare(b.city, 'pl'))

/* ---------- build alphabetical index ---------- */

const cityIndex = Object.values(
  cemeteriesByCity.reduce<Record<string, { letter: string; cities: string[] }>>((acc, group) => {
    if (group.city[0]) {
      const letter = group.city[0].toUpperCase()
      acc[letter] ??= { letter, cities: [] }
      acc[letter].cities.push(group.city)
    }

    return acc
  }, {}),
)
  .map((group) => ({
    letter: group.letter,
    cities: group.cities.sort((a, b) => a.localeCompare(b, 'pl')),
  }))
  .sort((a, b) => a.letter.localeCompare(b.letter))

function goToCemetery(slug: string) {
  router.push({ name: 'cemetery-details', params: { slug } })
}
</script>

<template>
  <section class="cemeteries-view">
    <PageTopBar
      :title="i18n.t('cemeteries.page.title')"
      :subtitle="i18n.t('cemeteries.page.subtitle')"
      :search-placeholder="i18n.t('cemeteries.page.search.placeholder')"
      has-filter
      has-search
    />

    <!-- Content -->
    <div class="view-content">
      <div class="cemeteries-layout">
        <!-- LEFT COLUMN: index -->
        <nav class="cities-index">
          <section v-for="group in cityIndex" :key="group.letter" class="index-group">
            <h2 class="index-letter">
              {{ group.letter }}
            </h2>

            <ul class="index-cities">
              <li v-for="city in group.cities" :key="city">
                <a :href="`#city-${slug(city)}`" class="index-city">
                  {{ city }}
                </a>
              </li>
            </ul>
          </section>
        </nav>

        <!-- RIGHT COLUMN: full list -->
        <div class="cemeteries-list">
          <section
            v-for="group in cemeteriesByCity"
            :key="group.city"
            :id="`city-${slug(group.city)}`"
            class="city-section"
          >
            <h2 class="city-title">
              {{ group.city }}
            </h2>

            <ul class="cemeteries">
              <li
                v-for="cemetery in group.cemeteries"
                :key="cemetery.id"
                class="cemetery-row"
                @click="goToCemetery(cemetery.id)"
              >
                <span class="cemetery-name">
                  {{ cemetery.name }}
                </span>

                <span class="cemetery-meta">
                  {{ cemetery.founded ?? '****' }} - {{ cemetery.closed ?? i18n.t('common.today') }} ·
                  {{ i18n.t('common.burials', cemetery.burialsCount ?? 2137) }}
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* =========================
   Layout
   ========================= */

.cemeteries-view {
  display: flex;
  flex-direction: column;
}

.view-header {
  border-bottom: 1px solid var(--color-border-default);
  padding: var(--space-xl) var(--space-xl) var(--space-lg);
}

.view-header-inner {
  max-width: 960px;
  margin: 0 auto;
}

.view-title {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.view-subtitle {
  margin-top: var(--space-xs);
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.view-content {
  max-width: 960px;
  width: 960px;
  margin: 0 auto;
  padding: var(--space-lg) var(--space-xl);
}

/* =========================
   Two-column layout
   ========================= */

.cemeteries-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--space-xl);
}

/* =========================
   LEFT: index
   ========================= */

.cities-index {
  position: sticky;
  top: var(--space-lg);
}

.index-group + .index-group {
  margin-top: var(--space-lg);
}

.index-letter {
  margin: 0 0 var(--space-xs);
  font-size: var(--font-size-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.index-cities {
  list-style: none;
  margin: 0;
  padding: 0;
}

.index-city {
  display: block;
  padding: var(--space-2xs) 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

/* =========================
   RIGHT: list
   ========================= */

.city-section + .city-section {
  margin-top: var(--space-xl);
}

.city-title {
  margin: 0 0 var(--space-sm);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}

.cemeteries {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cemetery-row {
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

.cemetery-name {
  font-family: var(--font-family-serif);
  font-size: var(--font-size-sm);
}

.cemetery-meta {
  margin-left: auto;
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  white-space: nowrap;
}
</style>
