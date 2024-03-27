<script lang="ts" setup></script>

<template>
  <section class="flex flex-col h-full bg-noise">
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

<style scoped>
.bg-noise {
  background:
    repeating-conic-gradient(#121212 0 0.0002%, #313131 0 0.0004%) 50% 0/2500px
      2500px,
    repeating-conic-gradient(#121212 0 0.0002%, #313131 0 0.0004%) 60% 60%/2500px
      2500px;
  background-blend-mode: difference;
  animation: noise 0.2s infinite alternate;
}
@keyframes noise {
  100% {
    background-position:
      50% 0,
      60% 50%;
  }
}
</style>
