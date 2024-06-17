<script setup lang="ts"></script>

<template>
  <div class="absolute text-nowrap">
    <UIcon class="icon text-2xl" name="i-heroicons-chevron-double-up" />
  </div>
</template>

<style scoped>
.icon {
  animation: truc ease-in-out 2s infinite;
}

@keyframes truc {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
