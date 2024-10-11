<script setup lang="ts">
import { useHubStore } from '~/stores/hub'

const hubStore = useHubStore()

hubStore.setItemsWithDelay(
  [],
  {
    label: 'Universe',
    link: '/universe',
  },
)
</script>

<template>
  <section class="flex h-full items-center justify-center">
    <AppHub />

    <span class="font-bold">
      Work in progress
      <Icon
        name="i-heroicons-wrench-screwdriver-solid"
        class="align-sub"
      />
    </span>
  </section>
</template>

<style scoped></style>
