import type { MapRouteState } from '@/types.ts'

export function formatGoogleMapsState(
  state: Required<Pick<MapRouteState, 'lat' | 'lng' | 'zoom'>>,
): string {
  const parts = [state.lat, state.lng, `${state.zoom}z`]

  return `${parts.join(',')}`
}
