<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="flex">
      <div class="w-full text-start">title</div>
      <div class="w-full text-end">status</div>
    </div>
    <div class="flex">
      <div>description</div>
      <div>carousel</div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: calc(100vh - var(--header-size));
}
</style>
