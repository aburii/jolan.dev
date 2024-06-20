<script setup lang="ts">
import { useHubStore } from '~/stores/hub'

const hubStore = useHubStore()

hubStore.setItemsWithDelay(
  [],
  {
    label: 'Universe',
    anchor: '/universe',
  },
)
</script>

<template>
  <div class="h-full">
    <HomeHero />
  </div>
</template>
<style scoped></style>
