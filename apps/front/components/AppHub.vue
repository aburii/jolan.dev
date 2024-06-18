<script setup lang="ts">
import { useHubStore } from "~/stores/hub";

const route = useRoute();
const hubStore = useHubStore();
const currentVisibleAnchor = ref<string | null>(null);
const windowScroll = useWindowScroll();

onMounted(() => {
  const handleScroll = () => {
    const currentScrollY = windowScroll.y.value;
    let foundVisibleAnchor = false;

    hubStore.items.forEach((item) => {
      const elementId = item.anchor.replace("#", "");
      const htmlEl = document.getElementById(elementId);

      if (htmlEl) {
        const elementTop = htmlEl.offsetTop;
        const elementBottom = elementTop + htmlEl.offsetHeight;

        if (
          currentScrollY >= elementTop - 100 &&
          currentScrollY <= elementBottom - 100
        ) {
          currentVisibleAnchor.value = item.anchor;
          foundVisibleAnchor = true;
        }
      }
    });

    if (!foundVisibleAnchor) {
      currentVisibleAnchor.value = null;
    }
  };

  const optimizedHandleScroll = () => {
    requestAnimationFrame(handleScroll);
  };

  document.addEventListener("scroll", optimizedHandleScroll);
});
</script>

<template>
  <div class="fixed w-full bottom-[50px]">
    <Transition>
      <nav
        v-if="hubStore.items.length > 0"
        class="mx-auto text-sm min-w-0 max-w-fit box-border rounded-lg bg-storm-dust-950 bg-opacity-90"
      >
        <ul class="flex gap-2 p-1.5 rounded-lg-lg">
          <li class="flex">
            <ULink
              :to="{ path: '/' }"
              class="lowercase bg-cod-gray-950 text-lg font-bold inline-flex items-center justify-center rounded-lg px-5 md:px-4 h-[48px] md:h-[60px] leading-loose"
            >
              j<span class="md:inline hidden">olan</span>
            </ULink>
          </li>
          <li class="rounded-lg bg-cod-gray-900 px-1.5 hidden md:block">
            <ul class="rounded-lg h-full flex items-center space-x-2">
              <li
                v-for="(item, i) in hubStore.items"
                :key="`${item.label}-${i}`"
                class="flex"
              >
                <ULink
                  :to="{ path: route.path, hash: item.anchor }"
                  :active="currentVisibleAnchor === item.anchor"
                  active-class="
                    !border-cod-gray-300 !text-cod-gray-200
                  "
                  class="transition-colors duration-300 ease decoration-0 hover:border-cod-gray-400 capitalize px-3 rounded-lg border border-cod-gray-500 text-cod-gray-500 inline-flex justify-center items-center h-[48px] leading-[32px]"
                >
                  {{ item.label }}
                </ULink>
              </li>
            </ul>
          </li>
          <li class="flex">
            <NuxtLink
              class="px-4 bg-cod-gray-100 font-semibold text-black rounded-lg inline-flex h-[48px] md:h-[60px] justify-center items-center"
              :to="hubStore.nextItem?.anchor"
            >
              {{ hubStore.nextItem?.label }}
              <UIcon
                name="i-heroicons-arrow-right"
                class="ml-2 align-baseline text"
              ></UIcon>
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
