<script setup lang="ts">
import { QLayout, QDrawer, QPageContainer } from 'quasar'
import { computed, ref } from 'vue'
import NavButton from '@/components/NavButton.vue'
import { formatGoogleMapsState } from '@/views/Map/utils/formatGoogleMapsState.ts'
import { DEFAULT_MAP_STATE } from '@/const.ts'
import { useMapStore } from '@/stores/map/map.ts'

const mapStore = useMapStore()

const isDrawerOpen = ref(true)

const navButtons = computed(() => [
  {
    icon: 'o_map',
    text: 'Map',
    to: {
      name: 'map',
      params: {
        state: mapStore.lastState ?? formatGoogleMapsState(DEFAULT_MAP_STATE),
      },
    },
  },
  {
    icon: 'o_group',
    text: 'Fraternities',
    to: { name: 'fraternities' },
  },
  {
    icon: 'o_location_on',
    text: 'Burials',
    to: { name: 'burials' },
  },
])
</script>

<template>
  <QLayout view="lHh lpR lFf">
    <QDrawer
      side="left"
      :width="72"
      v-model="isDrawerOpen"
      persistent
      elevated
      class="app-nav-panel"
    >
      <NavButton
        v-for="button in navButtons"
        :key="button.icon"
        :icon="button.icon"
        :text="button.text"
        :to="button.to"
      />
    </QDrawer>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss">
:deep(.app-nav-panel) {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
}
</style>
