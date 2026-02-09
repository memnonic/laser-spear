import type { MapRouteState } from '@/types.ts'

const STATE_REGEX = /^(-?\d+(\.\d+)?),(-?\d+(\.\d+)?),(\d+(\.\d+)?)z(?:,(\d+)y)?(?:,(\d+)t)?$/

export function parseGoogleMapsState(state: unknown): MapRouteState {
  if (typeof state !== 'string') {
    return {}
  }

  const match = state.match(STATE_REGEX)

  if (!match) {
    return {}
  }

  const lat = Number(match[1])
  const lng = Number(match[3])
  const zoom = Number(match[5])

  if (!Number.isFinite(lat) || !Number.isFinite(lng) || !Number.isFinite(zoom)) {
    return {}
  }

  return {
    lat,
    lng,
    zoom,
  }
}
