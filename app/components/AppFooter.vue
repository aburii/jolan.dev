<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="flex h-[50px] items-center border-t px-10"
  >
    <span class="w-full text-end text-xs">
      © Jolan Brizard, {{ currentYear }} - All rights reserved
    </span>
  </div>
</template>

<style scoped></style>
