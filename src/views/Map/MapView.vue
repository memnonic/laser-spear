<script setup lang="ts">
import { MglMap } from '@indoorequal/vue-maplibre-gl'
import { ref, type Ref } from 'vue'

const style = 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json'; // light theme
const center: Ref<[number, number]> = ref([18.558736386848953, 54.41362962813578]);
const zoom = ref(16);
</script>

<template>
  <MglMap :map-style="style" :center="center" :zoom="zoom" :attribution-control="false" height="100vh" />
</template>

<style scoped></style>
