<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="flex h-[50px] items-center border-t border-storm-dust-950 px-10 text-cod-gray-500"
  >
    <span class="text-start text-sm">
      © Jolan Brizard, {{ currentYear }} - All rights reserved
    </span>
  </div>
</template>

<style scoped></style>
