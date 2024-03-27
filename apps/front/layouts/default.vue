<script lang="ts" setup></script>

<template>
  <section class="flex flex-col h-full">
    <header class="md:px-16 lg:px-24 px-4 py-2 min-h-[80px]">
      <AppHeader class="h-full" />
    </header>
    <main class="w-full flex-grow md:px-16 lg:px-24 px-[26px] overflow-auto">
      <section class="mt-16 lg:mt-24">
        <slot />
      </section>
    </main>
  </section>
</template>

<style scoped></style>
