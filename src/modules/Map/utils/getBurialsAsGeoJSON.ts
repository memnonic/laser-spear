import type { Burial } from '@/types.ts'

export function getBurialsAsGeoJSON(burials: Burial[]) {
  return {
    type: 'FeatureCollection',
    features: burials
      .filter((burial) => burial.lat !== null && burial.lon !== null)
      .map((burial) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [burial.lon!, burial.lat!],
        },
        properties: {
          fraternity: burial.fraternities,
        }
      })),
  }
}
