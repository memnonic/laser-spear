<script setup lang="ts">
import type maplibregl from 'maplibre-gl';
import { MglCircleLayer, MglMarker, useMap } from '@indoorequal/vue-maplibre-gl'
import { nextTick, readonly, ref, watch } from 'vue'

interface IMarkerFeature {
  id?: string | number,
  type: string,
  geometry: {
    type: string,
    coordinates: [number, number],
  },
  properties: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any,
    cluster?: boolean,
    cluster_id?: number,
    point_count?: number,
    point_count_abbreviated?: string
  }
}

interface Props {
  sourceId: string,
  applyToClusters?: boolean,
  interactive?: boolean,
  minZoom?: number,
  maxZoom?: number
}

const props = withDefaults(defineProps<Props>(), {
  applyToClusters: undefined,
  interactive: true,
  minZoom: 0,
  maxZoom: 24,
});

defineEmits<{
  (e: 'marker-click', id: string): void
}>();

const map = useMap();
const features = ref<IMarkerFeature[]>([]);
const currentZoom = ref(map.map?.getZoom() || 0);

watch(() => map.map, () => {
  if (!map.map) {
    return;
  }

  setupEventListeners();
  updateMarkers();
}, { immediate: true });

watch(currentZoom, () => {
  updateMarkers();
});

watch(() => map.isLoaded, () => {
  updateMarkers();
}, { immediate: true });

watch([
  () => props.sourceId,
  () => props.applyToClusters,
  () => props.minZoom,
  () => props.maxZoom,
], () => {
  updateMarkers();
});

function setupEventListeners() {
  if (!map.map) {
    return;
  }

  map.map.off('zoom', handleZoom);
  map.map.off('sourcedata', handleSourceData);

  map.map.on('zoom', handleZoom);
  map.map.on('sourcedata', handleSourceData);

  if (map.isLoaded) {
    updateMarkers();
  } else {

    map.map.once('load', () => {
      updateMarkers();
    });
  }
}

function handleZoom() {
  if (!map.map) {
    return;
  }

  currentZoom.value = map.map.getZoom();
}

async function handleSourceData(event: maplibregl.MapSourceDataEvent) {
  if (event.sourceId === props.sourceId) {
    if (event.isSourceLoaded && event.dataType === 'source') {
      await nextTick();
      updateMarkers();
    }
  }
}

function updateMarkers() {
  if (!map.map || !props.sourceId) {
    return;
  }

  try {
    const featureList = map.map.querySourceFeatures(props.sourceId);
    const featureMap = new Map<string | number, IMarkerFeature>();

    let autoId = 0;

    // @ts-expect-error TS2345
    featureList.forEach((feature: maplibregl.Feature) => {
      const isCluster = !!feature.properties?.cluster;

      if (props.applyToClusters !== undefined) {
        if (props.applyToClusters && !isCluster) {
          return;
        }

        if (!props.applyToClusters && isCluster) {
          return;
        }
      }

      let id = feature.id;

      if (!id) {
        if (feature.properties?.cluster_id) {
          id = `autocluster_${feature.properties.cluster_id}`;
        } else {
          id = `autofeat_${autoId++}`;
        }
      }

      featureMap.set(id, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...feature as any,
        id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        geometry: feature.geometry as any,
        properties: feature.properties || {}
      });
    });

    features.value = Array.from(featureMap.values()).sort((a, b) => String(a.id).localeCompare(String(b.id)));
  } catch (ex) {
    console.error('Error updating markers:', ex);
  }
}

defineExpose({
  features: readonly(features),
  updateMarkers
});
</script>

<template>
  <MglCircleLayer
      :layer-id="applyToClusters ? 'points-clusters' : 'points-unclustered'"
      :source="sourceId"
      :filter="applyToClusters ? ['has', 'point_count'] : ['!', ['has', 'point_count']]"
      :paint="{ 'circle-opacity': 0, 'circle-radius': 0 }"
  />
  <template
      v-for="feature in features"
      :key="feature.id"
  >
    <MglMarker
        :coordinates="feature.geometry.coordinates"
    >
      <template #marker>
        <slot
            :feature="feature"
            :position="feature.geometry.coordinates"
            :is-cluster="!!feature.properties.cluster"
            :point-count="feature.properties.pointCount"
            :point-count-abbreviated="feature.properties.pointCountAbbreviated"
        >
          <div class="default-marker">
            <div
                v-if="feature.properties.cluster"
                class="cluster-marker"
            >
              {{ feature.properties.point_count_abbreviated || feature.properties.point_count }}
            </div>
            <div
                v-else
                class="point-marker"
            >
             <MglMarker :coordinates="feature.geometry.coordinates" />
            </div>
          </div>
        </slot>
      </template>
    </MglMarker>
  </template>
</template>

<style scoped lang="scss">
.default-marker {
  cursor: pointer;
}

.cluster-marker {
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.point-marker {
  font-size: 24px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}
</style>
