<script setup lang="ts">
import { useHubStore } from "~/stores/hub";

const hubStore = useHubStore();

hubStore.items = [
  {
    label: "Projets",
    link: "#projects",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

hubStore.nextItem = {
  label: "Universe",
  link: "/universe",
};
</script>

<template>
  <div class="h-full">
    <HomeHero class="py-1 h-full" />
  </div>
</template>
<style scoped></style>
