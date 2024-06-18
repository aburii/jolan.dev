<script setup lang="ts">
import { useHubStore } from "~/stores/hub";

const hubStore = useHubStore();

hubStore.items = [
  {
    label: "Non",
    anchor: "#projects",
  },
  {
    label: "Oui",
    anchor: "#contact",
  },
];

hubStore.nextItem = {
  label: "Profile",
  anchor: "/yessss",
};
</script>

<template>
  <section class="flex h-full items-center justify-center">
    <AppHub />

    <span class="text-4xl text-storm-dust-600 font-bold leading-snug"
      >Work in progress
      <UIcon name="i-heroicons-wrench-screwdriver-solid" class="align-sub"
    /></span>
  </section>
</template>

<style scoped></style>
