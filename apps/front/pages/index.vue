<script setup lang="ts">
import { useHubStore } from '~/stores/hub'

const hubStore = useHubStore()

hubStore.setItemsWithDelay(
  [
    {
      label: 'Projects',
      link: '#projects'
    }
  ],
  {
    label: 'Universe',
    link: '/universe',
  },
)
</script>

<template>
  <div class="h-full">
    <HomeHero class="px-5" />
    <HomeProjects />
    <HomeHero class="px-5" />
  </div>
</template>
<style scoped></style>
