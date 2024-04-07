<script setup lang="ts"></script>

<template>
  <div class="flex">
    <ul class="flex w-full justify-between items-center uppercase font-brand">
      <li class="w-1/3 text-start">
        <UButton
          variant="link"
          to="/"
          label="Home"
          class="header-link text-lg sm:text-2xl"
        />
      </li>
      <li class="w-1/3 text-center">
        <UButton
          variant="link"
          to="/blog"
          label="Blog"
          class="header-link text-lg sm:text-2xl"
        />
      </li>
      <li class="w-1/3 text-end">
        <UButton
          variant="link"
          to="/contact"
          label="Contact"
          class="header-link text-lg sm:text-2xl"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
