import type { HubItem } from "~/types/HubItem"

export const useHubStore = defineStore('hub', () => {
  const subItems = ref<HubItem[]>([])
  const nextItem = ref<HubItem | null>(null)
  const router = useRouter()

  router.beforeEach((a, b) => {
    if (a.path === b.path) {
      // anchors
      return
    }
    subItems.value = []
    nextItem.value = null
  })

  function setItemsWithDelay(items: HubItem[], next: HubItem) {
    subItems.value = []
    nextItem.value = null

    useTimeout(500, {
      callback: () => {
        subItems.value = items
        nextItem.value = next
      },
    })
  }

  return {
    items: subItems,
    nextItem,
    setItemsWithDelay,
  }
})
