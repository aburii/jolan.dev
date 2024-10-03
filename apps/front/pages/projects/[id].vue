<script setup lang="ts">
const hubStore = useHubStore()

hubStore.setItemsWithDelay(
  [],
  {
    label: 'Go back',
    link: '#projects',
  },
)
</script>

<template>
  <div>Project detail</div>
</template>

<style scoped>

</style>
