<script setup lang="ts">
import { useHubStore } from "~/stores/hub";

const hubStore = useHubStore();

hubStore.items = [
  {
    label: "Projets",
    anchor: "#projects",
  },
  {
    label: "Contact",
    anchor: "#contact",
  },
];

hubStore.nextItem = {
  label: "Universe",
  anchor: "/universe",
};
</script>

<template>
  <div class="h-full">
    <AppHub />
    <HomeHero class="py-1 h-full" />
    <HomeHero id="projects" class="py-1 h-full" />
    <HomeHero class="py-1 h-full" />
  </div>
</template>
<style scoped></style>
