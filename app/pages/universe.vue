<script setup lang="ts">
useSeoMeta({
  title: 'Universe',
  description: 'Discover the world of jolan.dev',
  ogTitle: 'Universe',
  ogDescription: 'Discover the world of jolan.dev',
  ogImage: 'https://jolan.dev/images/jolan-dev.screen.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

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
