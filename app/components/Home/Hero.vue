<script setup lang="ts">
</script>

<template>
  <section class="mx-auto flex h-screen max-w-7xl bg-background py-1">
    <div class="mt-52 w-full md:mt-96">
      <div class="font-display font-black leading-loose">
        <div class="flex-col items-center justify-center flex">
          JOLAN
        </div>
        <p
          class="text-center text-2xl italic text-secondary md:text-3xl"
        >
          software engineer
        </p>
      </div>
      <div class="mx-auto mt-10 w-fit text-center text-sm md:mt-20 md:w-2/5">
        <UIcon name="i-heroicons-chevron-down" class="icon size-6 text-zinc-500" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon {
  animation: idle 2s ease-in-out infinite;
}
@keyframes idle {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(30%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
