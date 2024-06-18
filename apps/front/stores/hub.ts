import type { HubItem } from "~/types/HubItem";

export const useHubStore = defineStore("hub", () => {
  const items = ref<HubItem[]>([]);
  const nextItem = ref<HubItem | null>(null);
  const router = useRouter();

  router.beforeEach(() => {
    items.value = [];
    nextItem.value = null;
  });

  return {
    items,
    nextItem,
  };
});
