<script setup lang="ts">
import { useHubStore } from '~/stores/hub'

const hubStore = useHubStore()

hubStore.setItemsWithDelay(
  [
    {
      label: 'Projets',
      anchor: '#projects',
    },
    {
      label: 'Expériences',
      anchor: '#experiences',
    },
    {
      label: 'Contact',
      anchor: '#contact',
    },
  ],
  {
    label: 'Universe',
    anchor: '/universe',
  },
)
</script>

<template>
  <div class="h-full">
    <HomeHero class="py-1" />
    <HomeHero id="projects" class="py-1" />
    <HomeHero id="experiences" class="py-1" />
    <HomeHero id="contact" class="py-1" />
  </div>
</template>
<style scoped></style>
