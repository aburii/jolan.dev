<script setup lang="ts">

</script>

<template>
  <div id="about" class="h-screen">
    <div class="flex h-full flex-col py-10 md:flex-row md:items-center">
      <NuxtImg class="lg:1/4 h-1/4 w-full rounded-xl object-cover md:h-full md:w-1/3" src="/images/FullSizeRender.png" />
      <div class="mt-10 w-full space-y-5 md:px-20">
        <h2 class="font-brand text-4xl font-black">
          About me
        </h2>
        <div class="flex w-full flex-col items-center md:flex-row">
          <p class="self-start font-display font-extralight">
            I'm a 23 year old developer based in Paris.
          </p>
          <div class="ml-0 mt-28 md:ml-10 md:mt-0">
            <NuxtLink
              class="inline-flex h-[48px] items-center justify-center rounded-lg bg-cod-gray-100 px-4 font-semibold text-black md:h-[60px]"
              to="/universe"
            >
              Into the verse
              <UIcon
                name="i-heroicons-arrow-right"
                class="text ml-2 align-baseline"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
