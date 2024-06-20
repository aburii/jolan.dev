<script setup lang="ts">
const emit = defineEmits(['menu-selected'])
</script>

<template>
  <ul class="app-nav">
    <li class="w-1/3 text-start">
      <UButton
        variant="link"
        to="/"
        label="Home"
        color="white"
        class="header-link text-lg font-bold lowercase sm:text-xl"
        @click="emit('menu-selected')"
      />
    </li>
    <li class="w-1/3 text-center">
      <UButton
        variant="link"
        to="/universe"
        label="Universe"
        color="white"
        class="header-link text-lg font-bold lowercase sm:text-xl"
        @click="emit('menu-selected')"
      />
    </li>
    <li class="w-1/3 text-end">
      <UButton
        variant="link"
        to="/contact"
        label="Contact"
        class="header-link text-lg font-bold lowercase sm:text-xl"
        color="white"
        @click="emit('menu-selected')"
      />
    </li>
  </ul>
</template>

<style scoped></style>
