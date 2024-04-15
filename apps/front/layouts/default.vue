<script lang="ts" setup>
// todo: border-b on header's scroll
</script>

<template>
  <section class="min-h-full">
    <header class="header">
      <AppHeader class="w-full md:px-16 lg:px-24 px-4 py-2" />
    </header>
    <main class="main-wrapper">
      <section class="main-content">
        <slot />
      </section>
    </main>
  </section>
</template>

<style scoped>
.header {
  @apply sticky top-0 z-50 min-h-[var(--header-size)] flex items-center w-full bg-cod-gray-950;
}
.main-wrapper {
  @apply relative px-6 md:px-16 lg:px-24;
  min-height: calc(100vh - var(--header-size));

  .main-content {
    @apply px-3;
  }
}
</style>
