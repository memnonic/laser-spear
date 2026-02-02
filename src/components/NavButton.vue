<script setup lang="ts">
import { QIcon } from 'quasar'
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  icon: string;
  text: string;
  to?: RouteLocationRaw;
}

defineProps<Props>()
</script>

<template>
  <RouterLink v-if="to" class="nav-button" :to="to">
    <QIcon :name="icon" class="nav-button__icon" size="md" />
    <div class="nav-button__subtitle">{{ text }}</div>
  </RouterLink>
</template>

<style scoped lang="scss">
.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5e5e5e;
  user-select: none;
  cursor: pointer;
  text-decoration: none;

  .nav-button__icon {
    margin: 0.25rem 0 0.5rem 0;
    width: 3rem;
    border-radius: 2rem;
  }

  .nav-button__subtitle {
    white-space: nowrap;
    margin: 0 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 1rem;
  }

  &:hover, &.router-link-active {
    .nav-button__icon {
      background-color:rgb(from #5e5e5e r g b/0.2)
    }
  }
}
</style>
