<template>
  <section class="min-h-full w-full">
    <AppHub />
    <main class="px-10">
      <slot />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </section>
</template>

<script lang="ts" setup></script>
<style scoped></style>
