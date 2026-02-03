<script setup lang="ts">
import { QLayout, QDrawer, QPageContainer, QFooter } from 'quasar'
import { computed, ref } from 'vue'
import NavButton from '@/components/NavButton.vue'
import { formatGoogleMapsState } from '@/views/Map/utils/formatGoogleMapsState.ts'
import { DEFAULT_MAP_STATE } from '@/const.ts'
import { useMapStore } from '@/stores/map/map.ts'
import { breakpointsQuasar, useBreakpoints } from '@vueuse/core'

const mapStore = useMapStore()
const breakpoints = useBreakpoints(breakpointsQuasar)

const isDrawerOpen = ref(true)
const isMobile = computed(() => breakpoints.smaller('sm'))

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
      v-if="!isMobile.value"
      side="left"
      :width="72"
      v-model="isDrawerOpen"
      persistent
      bordered
      behavior="desktop"
      class="app-nav-panel bg-grey-1"
      show-if-above
    >
      <NavButton
        v-for="button in navButtons"
        :key="button.icon"
        :icon="button.icon"
        :text="button.text"
        :to="button.to"
      />
    </QDrawer>

    <QFooter v-else bordered class="app-bottom-nav-panel bg-grey-1">
      <NavButton
        v-for="button in navButtons"
        :key="button.icon"
        :icon="button.icon"
        :text="button.text"
        :to="button.to"
      />
    </QFooter>

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

:deep(.app-bottom-nav-panel) {
  display: flex;

  a {
    flex: 1 1 auto;
  }
}
</style>

<style lang="scss">
.ls-page {
  padding: 1.5rem;
  background-color: $blue-grey-2;
  height: 100%;
}
</style>
