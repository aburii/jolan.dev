<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
  <section class="min-h-full w-full">
    <AppHub />
    <main>
      <slot />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </section>
</template>
