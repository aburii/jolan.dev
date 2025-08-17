<script setup lang="ts">
const hubStore = useHubStore()

hubStore.setItemsWithDelay(
  [
    {
      label: 'blog',
      link: '#blog'
    },
  ],
  {
    label: 'Home',
    link: '/',
  },
)
</script>

<template>
  <div class="h-screen py-5">
    <UniverseBlog class="px-5" />
  </div>
</template>

<style scoped></style>
