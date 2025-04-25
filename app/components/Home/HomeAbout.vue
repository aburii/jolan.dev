<script setup lang="ts">

</script>

<template>
  <div id="about" class="h-screen">
    <div class="flex h-full flex-col py-10 md:flex-row md:items-center">
      <NuxtImg class="lg:1/4 h-1/4 w-full rounded-xl object-cover md:h-full md:w-1/3" src="/images/FullSizeRender.png" />
      <div class="mt-10 w-full space-y-5 md:px-20">
        <h2 class="font-display text-4xl font-black">
          About me
        </h2>
        <div class="w-full flex-col items-center md:flex-row">
          <p class="self-start font-extralight">
            I'm a 23 years old developer based in Paris, France 🇫🇷. <br>
            Currently specializing in <span class="font-semibold">AI & Big data</span> engineering, I'm also a <span class="font-semibold">fullstack developer</span>.
          </p>
          <br>
          <p class="self-start font-extralight">
            In my journey to become an accomplished software engineer, I realized I wanted to make <span class="font-semibold">reliable</span> and <span class="font-semibold">elegant</span> solutions, code-speaking and visually-speaking.
          </p>
          <br>
          <p class="self-start font-extralight">
            My current dream, <span class="text-sm italic">as childish it may seem</span>, is to make the world a better place, as for devs or normal people in the <span class="italic">"real life"</span>.
            <br>
            Go visit the
            <NuxtLink class="font-semibold italic underline" to="/universe">
              universe
            </NuxtLink> to learn more about my personality and stuff I like!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
