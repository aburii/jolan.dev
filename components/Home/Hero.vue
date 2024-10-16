<script setup lang="ts">
</script>

<template>
  <section class="mx-auto flex h-screen max-w-7xl bg-background py-1">
    <div class="mt-96 w-full">
      <div class="font-display font-black leading-loose">
        <div class="hidden flex-col items-center justify-center md:flex">
          <InspiraParticleImage
            image-src="/images/jolan.png"
            :responsive-width="false"
            mouse-force="5"
          />
        </div>
        <div class="flex flex-col items-center justify-center md:hidden">
          <InspiraParticleImage
            image-src="/images/jolan-mobile.png"
            :responsive-width="false"
            mouse-force="5"
          />
        </div>
        <p
          class="text-center text-2xl italic text-secondary md:text-3xl"
        >
          software engineer
        </p>
      </div>
      <div class="mx-auto mt-20 w-fit text-center text-sm md:w-2/5">
        <Icon name="i-heroicons-chevron-down" class="icon size-6 text-zinc-500" />
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
