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
      <div class="item">
        Item 1
      </div>
      <div class="item">
        Item 2
      </div>
      <div class="item">
        Item 3
      </div>
      <div class="item">
        Item 4
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
  font-size: 3rem;
  background-color: #ccc;
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>
