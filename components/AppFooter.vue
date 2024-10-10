<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="border-storm-dust-950 text-cod-gray-500 flex h-[50px] items-center border-t px-10"
  >
    <span class="text-start text-sm">
      © Jolan Brizard, {{ currentYear }} - All rights reserved
    </span>
  </div>
</template>

<style scoped></style>
