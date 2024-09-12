<script setup lang="ts">
import { useHubStore } from '~/stores/hub'

const route = useRoute()
const hubStore = useHubStore()
const currentVisibleAnchor = ref<string | null>(null)
const windowScroll = useWindowScroll()

onMounted(() => {
  const handleScroll = () => {
    const currentScrollY = windowScroll.y.value
    let foundVisibleAnchor = false

    hubStore.items.forEach((item) => {
      const elementId = item.link.replace('#', '')
      const htmlEl = document.getElementById(elementId)

      if (htmlEl) {
        const elementTop = htmlEl.offsetTop
        const elementBottom = elementTop + htmlEl.offsetHeight

        if (
          currentScrollY >= elementTop - 100 &&
          currentScrollY <= elementBottom - 100
        ) {
          currentVisibleAnchor.value = item.link
          foundVisibleAnchor = true
        }
      }
    })

    if (!foundVisibleAnchor) {
      currentVisibleAnchor.value = null
    }
  }

  const optimizedHandleScroll = () => {
    requestAnimationFrame(handleScroll)
  }

  document.addEventListener('scroll', optimizedHandleScroll)
})
</script>

<template>
  <div class="fixed bottom-[50px] z-50 w-full">
    <Transition>
      <nav
        v-if="hubStore.nextItem || hubStore.items.length > 0"
        class="mx-auto box-border min-w-0 max-w-fit rounded-lg bg-storm-dust-950 bg-opacity-90 text-sm"
      >
        <ul class="rounded-lg-lg flex gap-2 p-1.5">
          <li class="flex">
            <ULink
              :to="{ path: '/' }"
              class="inline-flex h-[48px] items-center justify-center rounded-lg bg-cod-gray-950 px-5 text-lg font-bold lowercase leading-loose md:h-[60px] md:px-4"
            >
              j<span class="hidden md:inline">olan</span>
            </ULink>
          </li>
          <li
            v-if="hubStore.items.length > 0"
            class="hidden rounded-lg bg-cod-gray-900 px-1.5 md:block"
          >
            <ul class="flex h-full items-center space-x-2 rounded-lg">
              <li
                v-for="(item, i) in hubStore.items"
                :key="`${item.label}-${i}`"
                class="flex"
              >
                <ULink
                  :to="{ path: route.path, hash: item.link }"
                  :active="currentVisibleAnchor === item.link"
                  active-class="
                    !border-cod-gray-300 !text-cod-gray-200
                  "
                  class="ease inline-flex h-[48px] items-center justify-center rounded-lg border border-cod-gray-500 px-3 capitalize leading-[32px] text-cod-gray-500 decoration-0 transition-colors duration-300 hover:border-cod-gray-400"
                >
                  {{ item.label }}
                </ULink>
              </li>
            </ul>
          </li>
          <li class="flex">
            <NuxtLink
              class="inline-flex h-[48px] items-center justify-center rounded-lg bg-cod-gray-100 px-4 font-semibold text-black md:h-[60px]"
              :to="hubStore.nextItem?.link"
            >
              {{ hubStore.nextItem?.label }}
              <UIcon
                name="i-heroicons-arrow-right"
                class="text ml-2 align-baseline"
              />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
