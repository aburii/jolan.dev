export default defineNuxtPlugin(() => {
  const router = useRouter()
  const hubStore = useHubStore()

  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      hubStore.resetItems()
    }
  })
})