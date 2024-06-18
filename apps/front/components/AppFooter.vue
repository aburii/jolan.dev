<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div
    class="h-[50px] flex text-cod-gray-500 px-10 items-center border-t border-storm-dust-950"
  >
    <span class="text-start text-sm"
      >© Jolan Brizard, {{ currentYear }} - All rights reserved</span
    >
  </div>
</template>

<style scoped></style>
