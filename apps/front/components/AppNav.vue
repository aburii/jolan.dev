<script setup lang="ts">
defineProps<{
  horizontal: boolean;
}>();

const emit = defineEmits(["menu-selected"]);
</script>

<template>
  <ul class="app-nav">
    <li :class="{ 'w-1/3 text-start': horizontal }">
      <UButton
        variant="link"
        to="/"
        label="Home"
        class="header-link lowercase text-lg sm:text-xl font-bold"
        @click="emit('menu-selected')"
      />
    </li>
    <li :class="{ 'w-1/3 text-center': horizontal }">
      <UButton
        variant="link"
        to="/universe"
        label="Universe"
        class="header-link lowercase text-lg sm:text-xl font-bold"
        @click="emit('menu-selected')"
      />
    </li>
    <li :class="{ 'w-1/3 text-center': horizontal }">
      <UButton
        variant="link"
        to="/contact"
        label="Contact"
        class="header-link lowercase text-lg sm:text-xl font-bold"
        @click="emit('menu-selected')"
      />
    </li>
  </ul>
</template>

<style scoped></style>
