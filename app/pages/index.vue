<script setup lang="ts">
useSeoMeta({
  title: 'jolan.de',
  description: 'Software engineer',
  ogTitle: 'jolan.dev',
  ogDescription: 'Software engineer',
  ogImage: '/images/jolan-dev.screen.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const hubStore = useHubStore()

hubStore.setItemsWithDelay(
  [
    {
      label: 'Projects',
      link: '#projects'
    },
    {
      label: 'About',
      link: '#about'
    }
  ],
  {
    label: 'Universe',
    link: '/universe',
  },
)
</script>
<template>
  <div class="h-full">
    <HomeHero class="px-5" />
    <HomeProjects />
    <HomeAbout class="px-5" />
  </div>
</template>
<style scoped>
</style>
