<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="w-full mt-36">
      <div
        class="font-display text-end text-2xl leading-normal md:text-5xl md:leading-snug font-black"
      >
        <p>Jolan</p>
        <p class="lowercase text-storm-dust-600">
          "big things often have small beginnings."
        </p>
      </div>
      <div class="font-display text-end font-light">
        <UIcon name="i-heroicons-signal" class="align-middle text-green-500" />
        available
      </div>
      <div class="mt-10 text-lg w-1/2">
        Commodo veniam et incididunt nulla cupidatat commodo incididunt mollit.
        Magna do reprehenderit nisi quis aute veniam nostrud fugiat sit velit
        elit Lorem anim nisi cillum. Velit magna deserunt eiusmod velit tempor
        quis magna deserunt anim sunt ex. Proident qui voluptate voluptate
        occaecat mollit laborum amet do nisi enim dolor ex magna elit pariatur.
      </div>
      <section class="flex justify-between items-center mt-20">
        <div class="flex gap-5">
          <UButton
            color="black"
            size="lg"
            leading-icon="i-heroicons-envelope"
            class="font-display"
            >Contact me</UButton
          >
          <UButton
            color="black"
            size="lg"
            disabled
            class="line-through font-display"
            leading-icon="i-heroicons-calendar"
            >Make an appointment</UButton
          >
        </div>
        <div class="flex items-center justify-center space-x-10">
          <UIcon name="i-simple-icons-github" class="text-3xl" />
          <UIcon name="i-simple-icons-linkedin" class="text-3xl" />
          <UIcon name="i-simple-icons-instagram" class="text-3xl" />
          <UIcon name="i-simple-icons-x" class="text-3xl" />
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
