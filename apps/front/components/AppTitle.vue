<script setup lang="ts">
defineProps<{
  size: "xs" | "sm" | "md" | "lg" | "xl";
}>();
</script>

<template>
  <UAvatar
    :size="size"
    src="https://avatars.githubusercontent.com/u/71981971?v=4"
    alt="Jolan"
  />
  <span> Jolan / <span class="text-storm-dust-600">web developer</span> </span>
</template>

<style scoped></style>
