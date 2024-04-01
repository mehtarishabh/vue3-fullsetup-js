<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter.js';
import { storeToRefs } from 'pinia'

const counter = useCounterStore();
const { imageDetails } = storeToRefs(counter)
const { getPhotos } = counter

onMounted(async () => {
  await getPhotos()
})

</script>

<template>
  <h1>Contact Page</h1>
  <img :src="imageDetails?.url" alt="Image" style="{ height: 100px; width: 100px; }"/>
</template>

<style>
</style>