<script setup lang="ts">
import { MglMap, useMap } from '@indoorequal/vue-maplibre-gl'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import type { MapRouteState } from '@/types.ts'
import { formatGoogleMapsState } from '@/modules/Map/utils/formatGoogleMapsState.ts'
import { DEFAULT_MAP_STATE } from '@/const.ts'
import { useMapStore } from '@/stores/map/map.ts'
import { getBurialsAsGeoJSON } from '@/modules/Map/utils/getBurialsAsGeoJSON.ts'
import burials from '@/staticData/burials.ts'
import MarkerFeature from '@/modules/Map/components/MarkerFeature.vue'

const style = 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json'
withDefaults(defineProps<MapRouteState>(), DEFAULT_MAP_STATE)

const route = useRoute()
const router = useRouter()

const map = useMap()
const mapStore = useMapStore()

const data = computed(() => getBurialsAsGeoJSON(burials))

const syncUrlFromMap = useDebounceFn(() => {
  if (!map.map) {
    return
  }

  const center = map.map.getCenter()
  const z = map.map.getZoom()

  router.replace({
    name: 'map',
    params: {
      state: formatGoogleMapsState({
        lat: center.lat,
        lng: center.lng,
        zoom: z,
      }),
    },
  })
}, 300)

function onMapMove() {
  syncUrlFromMap()
}

watch(
  () => route.params.state,
  (state) => {
    if (typeof state === 'string') {
      mapStore.lastState = state
    }
  },
  { immediate: true },
)
</script>

<template>
  <section class="map-view">
    <MglMap
      :map-style="style"
      :center="[lng, lat]"
      :zoom="zoom"
      :attribution-control="false"
      height="100%"
      @map:moveend="onMapMove"
      @map:zoomend="onMapMove"
    >
      <MglGeoJsonSource
        source-id="geojson"
        :data="data as unknown as maplibregl.MapSourceDataType"
        cluster
        :cluster-radius="35"
      >
        <MarkerFeature source-id="geojson" />
      </MglGeoJsonSource>
    </MglMap>
  </section>
</template>

<style scoped lang="scss"></style>
