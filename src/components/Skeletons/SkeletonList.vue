<template>
  <ul class="skeleton">
    <li class="mb-4">
      <div class="flex">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div class="self-center flex-1">
          <Skeleton width="100%" class="mb-2"></Skeleton>
          <Skeleton width="75%"></Skeleton>
        </div>
      </div>
    </li>
    <li class="mb-4">
      <div class="flex">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div class="self-center flex-1">
          <Skeleton width="100%" class="mb-2"></Skeleton>
          <Skeleton width="75%"></Skeleton>
        </div>
      </div>
    </li>
    <li class="mb-4">
      <div class="flex">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div class="self-center flex-1">
          <Skeleton width="100%" class="mb-2"></Skeleton>
          <Skeleton width="75%"></Skeleton>
        </div>
      </div>
    </li>
    <li>
      <div class="flex">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div class="self-center flex-1">
          <Skeleton width="100%" class="mb-2"></Skeleton>
          <Skeleton width="75%"></Skeleton>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>

<style scope>
.skeleton {
  width: 100%;
  height: 100%;
  padding: 1rem;
}
</style>
