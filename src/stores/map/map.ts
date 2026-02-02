import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const useMapStore = defineStore('mapStore', () => {
  const lastState: Ref<string | undefined> = ref(undefined)

  return {
    lastState,
  }
})
