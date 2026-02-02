<script setup lang="ts">
import { MglMap, useMap } from '@indoorequal/vue-maplibre-gl'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'

interface Props {
  lat: number
  lng: number
  z: number
}

const style = 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json'
const props = withDefaults(defineProps<Props>(), {
  lat: 54.41362962813578,
  lng: 18.558736386848953,
  z: 16,
})

console.log(props);

const route = useRoute()
const router = useRouter()

const map = useMap()

const syncUrlFromMap = useDebounceFn(() => {
  if (!map.map) {
    return
  }

  const center = map.map.getCenter()
  const z = map.map.getZoom()

  router.replace({
    query: {
      lat: center.lat.toFixed(5),
      lng: center.lng.toFixed(5),
      z: Math.round(z),
    },
  })
}, 300)

function onMapMove() {
  syncUrlFromMap()
}

watch(
  () => route.query,
  (q) => {
    if (!map.map) {
      return
    }

    const lat = Number(q.lat)
    const lng = Number(q.lng)
    const z = Number(q.z)

    if (!Number.isFinite(lat) || !Number.isFinite(lng) || !Number.isFinite(z)) {
      return
    }

    const center = map.map.getCenter()
    const zoom = map.map.getZoom()

    const moved =
      Math.abs(center.lat - lat) > 1e-5 ||
      Math.abs(center.lng - lng) > 1e-5 ||
      Math.round(zoom) !== z

    if (moved) {
      map.map.jumpTo({
        center: [lng, lat],
        zoom: z,
      })
    }
  },
)
</script>

<template>
  <MglMap
    :map-style="style"
    :center="[lng, lat]"
    :zoom="z"
    :attribution-control="false"
    height="100vh"
    @map:moveend="onMapMove"
    @map:zoomend="onMapMove"
  />
</template>

<style scoped></style>
