<script setup lang="ts">
import { computed } from 'vue'
import type { Fraternity } from '@/types.ts'

const props = withDefaults(
  defineProps<{
    fraternity?: Fraternity
  }>(),
  {
    fraternity: () => ({
      name: 'Konwent Polonia',
      motto: 'Jeden za wszystkich, wszyscy za jednego',
      founded: 1828,
      foundedIn: 'Dorpat',
      isActive: true,
      colors: ['#b60063', '#6994b8', '#ffffff'],
      colorsRtl: true,
    }),
  },
)

const statusLabel = computed(() => (props.fraternity?.isActive ? 'aktywna' : 'nieaktywna'))

const statusClass = computed(() => (props.fraternity?.isActive ? 'is-active' : 'is-inactive'))

const directionClass = computed(() =>
  props.fraternity?.colorsRtl ? 'dir-diagonal-right' : 'dir-diagonal-left',
)

const colorsClass = computed(() => `colors-${props.fraternity.colors.length}`)

const c1 = computed(() => props.fraternity.colors[0])
const c2 = computed(() => props.fraternity.colors[1] ?? props.fraternity.colors[0])
const c3 = computed(
  () => props.fraternity.colors[2] ?? props.fraternity.colors[1] ?? props.fraternity.colors[0],
)
</script>

<template>
  <article class="fraternity-card" :class="statusClass">
    <header class="fraternity-header">
      <h2 class="fraternity-name">
        {{ fraternity.name }}

        <span class="fraternity-mark" :class="[directionClass, colorsClass]" aria-hidden="true" />
      </h2>

      <p v-if="fraternity.motto" class="fraternity-motto">
        {{ fraternity.motto }}
      </p>
    </header>

    <p class="fraternity-founded">{{ fraternity.founded }} · {{ fraternity.foundedIn }}</p>

    <footer class="fraternity-footer">
      <span class="fraternity-status">
        {{ statusLabel }}
      </span>

      <nav class="fraternity-links">
        <a href="#" target="_blank" rel="noopener"> www </a>

        <a href="#" target="_blank" rel="noopener"> fb </a>

        <a :href="`mailto:#`"> mail </a>
      </nav>
    </footer>
  </article>
</template>

<style scoped lang="scss">
/* =========================
   Card base
   ========================= */

.fraternity-card {
  background: var(--color-background-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* =========================
   Header
   ========================= */

.fraternity-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.fraternity-name {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin: 0;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
}

/* =========================
   Color mark (sygnatura)
   ========================= */

.fraternity-mark {
  width: 22px;
  height: 22px;
  border-radius: 2px;
  flex-shrink: 0;
  border: solid var(--color-border-default) 1px;
}

/* --- diagonal left --- */

.dir-diagonal-left.colors-1 {
  background: v-bind(c1);
}

.dir-diagonal-left.colors-2 {
  background: linear-gradient(
    135deg,
    v-bind(c1) 0%,
    v-bind(c1) 50%,
    v-bind(c2) 50%,
    v-bind(c2) 100%
  );
}

.dir-diagonal-left.colors-3 {
  background: linear-gradient(
    135deg,
    v-bind(c1) 0%,
    v-bind(c1) 33.33%,
    v-bind(c2) 33.33%,
    v-bind(c2) 66.66%,
    v-bind(c3) 66.66%,
    v-bind(c3) 100%
  );
}

/* --- diagonal right --- */

.dir-diagonal-right.colors-1 {
  background: v-bind(c1);
}

.dir-diagonal-right.colors-2 {
  background: linear-gradient(
    45deg,
    v-bind(c1) 0%,
    v-bind(c1) 50%,
    v-bind(c2) 50%,
    v-bind(c2) 100%
  );
}

.dir-diagonal-right.colors-3 {
  background: linear-gradient(
    45deg,
    v-bind(c1) 0%,
    v-bind(c1) 33.33%,
    v-bind(c2) 33.33%,
    v-bind(c2) 66.66%,
    v-bind(c3) 66.66%,
    v-bind(c3) 100%
  );
}

/* =========================
   Text
   ========================= */

.fraternity-motto {
  font-size: var(--font-size-sm);
  font-style: italic;
  color: var(--color-text-secondary);
  margin: 0;
}

.fraternity-founded {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin: var(--space-sm) 0 var(--space-lg);
}

/* =========================
   Footer
   ========================= */

.fraternity-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fraternity-status {
  font-size: var(--font-size-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-secondary);

  &::before {
    content: '●';
    margin-right: 0.35em;
    color: var(--color-semantic-active);
  }
}

.fraternity-links {
  display: flex;
  gap: var(--space-md);

  a {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

/* =========================
   States
   ========================= */

.is-inactive,
.is-archived {
  opacity: 0.55;

  .fraternity-status {

    &::before {
      color: var(--color-semantic-inactive);
    }
  }
}
</style>
