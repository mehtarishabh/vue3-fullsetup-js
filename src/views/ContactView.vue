<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter.js';
import { storeToRefs } from 'pinia'
import Skeleton from "@/components/Skeletons/Skeleton.vue"
import { info } from '@/services/ToastService';

const counter = useCounterStore();
const { imageDetails } = storeToRefs(counter)
const { getPhotos } = counter
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await getPhotos()
  isLoading.value = false
})

const showToast = () => {
  info()
}

</script>

<template>
  <h1>Contact Page</h1>
  <div>
    <img :src="imageDetails?.url" alt="Image" style="{ height: 200px; width: 200px; }" />
    <Skeleton/>
    <button @click="showToast">Show toast</button>
  </div>
</template>

<style scoped>
</style>
