<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <section class="min-h-full w-full">
    <SpeedInsights />
    <AppHub />
    <main>
      <slot />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </section>
</template>
<style scoped>
</style>
