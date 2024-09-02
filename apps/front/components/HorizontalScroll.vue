<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { IProject } from '~/types/Project'

defineProps<{
  projects: IProject[]
}>()

const { $gsap } = useNuxtApp()

$gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const testitest = document.querySelector('.scrollable-content')
  const items = $gsap.utils.toArray('.item')

  if (!testitest) {
    return
  }

  const horizontalScroll = $gsap.to(items, {
    xPercent: -100 * (items.length - 1),
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '.pin-section',
      pin: true,
      scrub: 0.5,
      end: () => `+=${testitest.scrollWidth - window.innerWidth}`,
    }
  })

  items.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item as any,
      containerAnimation: horizontalScroll,
      start: () => 'left center',
      end: () => 'right center',
    })
  })
})


</script>

<template>
  <section class="pin-section">
    <div class="scrollable-content">
      <div v-for="(project, index) in projects" :key="`project-${index}`" class="item px-5 pb-10">
        <div
          class="item-card rounded-xl bg-red-50"
          :style="{ backgroundImage: 'url(' +
                      project.imageUrl +
                      ')', backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    boxShadow: '0 0 25px 5px' + project.primaryColor
          }"
        >
          {{ project.title }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pin-section {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.scrollable-content {
  display: flex;
  height: 100vh;
}

.item {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .item-card {
    width: 100%;
    height: 75%;
  }
}
</style>
