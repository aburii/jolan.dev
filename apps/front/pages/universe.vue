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
  <section class="flex h-full items-center justify-center">
    <AppHub />

    <span class="text-4xl font-bold leading-snug text-storm-dust-600">
      Work in progress
      <UIcon
        name="i-heroicons-wrench-screwdriver-solid"
        class="align-sub"
      />
    </span>
  </section>
</template>

<style scoped></style>
