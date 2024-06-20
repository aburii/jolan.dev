<script setup lang="ts">
const projects = ref([
  {
    title: 'Lana'
  },
  {
    title: 'Mockline'
  },
  {
    title: 'Tandem'
  }
])

const index = ref(0)
const selectedProject = computed(() => {
  return projects.value[index.value]
})
</script>

<template>
  <div class="flex h-screen justify-between">
    <ul class="h-full">
      <li v-for="(p, i) in projects" :key="`${p.title}-${i}`" class="font-display text-5xl font-black capitalize hover:scale-90" @click.prevent="index = i">
        {{ p.title }}
      </li>
    </ul>
    <div class="h-full">
      <div v-if="selectedProject">
        {{ selectedProject }} is selected
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
