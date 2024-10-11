<script setup lang="ts">
import type { IProject } from '~/types/Project'

const projects = ref<IProject[]>([
  {
    title: 'jolan.dev',
    date: '2024',
    description: 'Description of lana here',
    imageUrl: '/images/mockline.screen.png',
    primaryColor: '#FFFFFF'
  },
  {
    title: 'IND',
    date: 'Work in progress',
    description: 'description of tandem here',
    imageUrl: '/images/mockline.screen.png',
    primaryColor: '#D65D65'
  },
  {
    title: 'Mockline',
    date: '2023-2024',
    description: 'description of mockline here',
    imageUrl: '/images/mockline.screen.png',
    primaryColor: '#3D3D3D'
  },
  {
    title: 'Lana',
    date: '2024',
    description: '',
    imageUrl: '/images/lana.screen.png',
    primaryColor: '#FA903E'
  },
])

const index = ref(0)
const selectedProject = computed(() => {
  return projects.value[index.value]
})
</script>

<template>
  <div id="projects">
    <div class="desktop-container hidden h-screen pl-5 lg:flex">
      <div class="projects-title flex h-fit w-1/3 flex-col justify-between space-y-6 self-center px-10">
        <div
          v-for="(p, i) in projects"
          :id="'project-title-' + i"
          :key="p.title"
          class="w-fit cursor-pointer text-3xl font-black transition-all duration-200 hover:ml-5 hover:scale-125"
          :class="{ 'text-3xl opacity-60': index !== i, 'ml-5 scale-125': index === i }"
          @mouseover="index = i"
        >
          {{ p.title }}
        </div>
      </div>
      <div v-if="selectedProject" class="project-content flex flex-grow flex-row justify-end">
        <div
          class="h-2/3 w-full self-center rounded-bl-lg rounded-tl-xl"
          :style="{ backgroundImage: 'url(' +
                      selectedProject.imageUrl +
                      ')', backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0 0 20px 5px' + selectedProject.primaryColor
          }"
        />
      </div>
    </div>
    <HorizontalScroll class="block h-full lg:hidden" :projects />
  </div>
</template>

<style>
</style>
