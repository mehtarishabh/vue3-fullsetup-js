import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import axios from '@/lib/axios.js'

export const useCounterStore = defineStore('counter', () => {
  // Store
  const count = ref(0)
  const imageDetails = ref({})

  // Getters
  const doubleCount = computed(() => count.value * 2)

  // Actions
  function increment() {
    count.value++
  }

  function getPhotos() {
    axios.get("/photos").then((res) => {
      imageDetails.value = res[0]
    })
  }

  return { count, imageDetails, doubleCount, increment, getPhotos }
})
