<script setup lang="ts">

import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <div class="app-shell">
    <TopBar />

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  min-height: 100vh;
  background: var(--color-background-primary);
  display: flex;
  flex-direction: column;

  .app-main {
    flex: 1;
    display: flex;
    min-height: 0;

    & > * {
      flex: 1;
      min-width: 0;
    }
  }
}
</style>
