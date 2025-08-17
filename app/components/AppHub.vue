<script setup lang="ts">
import { useHubStore } from '~/stores/hub'
import type { HubItem } from '~/types/HubItem'

const hubStore = useHubStore()
const currentVisibleAnchor = ref<string | null>(null)
const windowScroll = useWindowScroll()

onMounted(() => {
  const handleScroll = () => {
    if (hubStore.items.length === 0) {
      return
    }

    const TOP_OFFSET = 150
    const currentScrollY = windowScroll.y.value

    let visibleItem: HubItem | undefined

    hubStore.items.forEach((item: HubItem) => {
      const elementId = item.link.replace('#', '')
      const htmlEl = document.getElementById(elementId)

      if (htmlEl) {
        const elementTop = htmlEl.offsetTop

        if (elementTop <= currentScrollY + TOP_OFFSET) {
          visibleItem = item
        }
      }
    })

    currentVisibleAnchor.value = visibleItem != null ? visibleItem.link : null
  }


  const optimizedHandleScroll = () => {
    requestAnimationFrame(handleScroll)
  }

  document.addEventListener('scroll', optimizedHandleScroll)
})
</script>

<template>
  <div class="fixed bottom-[20px] z-50 w-full md:bottom-[50px]">
    <Transition>
      <nav
        v-if="hubStore.nextItem || hubStore.items.length > 0"
        class="mx-auto box-border min-w-0 max-w-fit rounded-lg text-sm"
      >
        <ul class="rounded-lg flex gap-2 p-1.5 bg-neutral-800">
          <li class="flex">
            <NuxtLink
              to="/"
              class="bg-neutral-950 inline-flex h-[48px] items-center justify-center rounded-lg px-5 text-lg font-bold lowercase leading-loose md:h-[60px] md:px-4"
            >
              j<span class="hidden md:inline">olan</span>
            </NuxtLink>
          </li>
          <li
            v-if="hubStore.items.length > 0"
            class="hidden rounded-lg px-2 lg:block bg-neutral-900"
          >
            <ul class="flex h-full items-center space-x-2 rounded-lg">
              <li
                v-for="(item, i) in hubStore.items"
                :key="`${item.label}-${i}`"
                class="flex"
              >
                <NuxtLink
                  :to="item.link"
                  :class="[{ 'text-primary border-primary': currentVisibleAnchor == item.link }, 'inline-flex max-w-[100px] ease justify-start h-[48px] cursor-pointer items-center rounded-lg border px-3 capitalize leading-[32px] decoration-0 transition-colors duration-300 border-neutral-700 text-neutral-700 hover:text-primary hover:border-primary']"
                >
                  <span class="overflow-hidden whitespace-nowrap text-ellipsis min-w-0">{{ item.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="flex">
            <NuxtLink
              class="inline-flex h-[48px] items-center justify-center rounded-lg px-4 font-semibold md:h-[60px] bg-primary text-inverted"
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
