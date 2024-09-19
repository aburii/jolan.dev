<script setup lang="ts">

</script>

<template>
  <div class="h-screen">
    <div class="flex h-full flex-col py-10 md:flex-row md:items-center">
      <NuxtImg class="lg:1/4 h-1/4 w-full rounded-xl object-cover md:h-full md:w-1/3" src="/images/FullSizeRender.png" />
      <div class="mt-10 w-full space-y-5 md:px-20">
        <h2 class="font-display text-4xl font-black">
          About me
        </h2>
        <div class="flex w-full flex-col items-center justify-center md:flex-row">
          <p class="self-start font-extralight">
            I'm a 23 year old developer based in Paris.
          </p>
          <div class="ml-0 mt-10 md:ml-10 md:mt-0">
            <UButton
              label="Visit Universe"
              variant="solid"
              color="black"
              size="xl"
              class="mx-auto block text-nowrap font-semibold md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
