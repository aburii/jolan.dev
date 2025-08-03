<script setup lang="ts">
import type { IProject } from '~/types/Project'

const projects = ref<IProject[]>([
  {
    title: 'I.N.D.',
    date: 'Work in progress',
    description: 'Put the light on independent artists in the music industry.',
    imageUrl: '/images/ind.screen.png',
    primaryColor: '#0E1821'
  },
  {
    title: 'jolan.dev',
    date: '2025',
    description: 'My current portfolio using Nuxt!',
    imageUrl: '/images/jolan-dev.screen.png',
    primaryColor: '#FFFFFF'
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
      <div class="projects-title flex h-fit w-1/3 flex-col justify-between space-y-10 self-center px-10">
        <div
          v-for="(p, i) in projects"
          :id="'project-title-' + i"
          :key="p.title"
          class="cursor-pointer font-black"
          @click="index = i"
        >
          <p
            :class="{ 'text-3xl opacity-60': index !== i, 'transition-all duration-200 text-5xl': index === i }">
            {{ p.title }}
          </p>

          <div v-if="index === i" class="font-normal mt-3">
            <p class="text-lg">{{ p.description }}</p>
            <p class="text-xs italic">{{ p.date }}</p>
          </div>
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

    <div class="projects-grid h-screen lg:hidden p-5">
      <div
        v-for="p in projects"
        :key="p.title"
        class="project-card mb-10 rounded-lg overflow-hidden relative"
        :style="{
                    boxShadow: '0 0 20px 5px' + p.primaryColor
            }"
      >
        <div class="relative h-64 w-full">
          <img :src="p.imageUrl" :alt="p.title" class="object-cover h-full w-full">
          <div
            class="absolute inset-0 flex items-end p-4"
          >
            <div>
              <h3 class="text-white text-xl font-bold">{{ p.title }}</h3>
              <p class="text-gray-300 mt-1 text-sm">{{ p.description }}</p>
              <p class="text-gray-400 mt-1 text-xs">{{ p.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
