<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>
<template>
  <UApp>
    <Analytics />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
