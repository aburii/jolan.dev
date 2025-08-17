<script setup lang="ts">
const route = useRoute()
const hubStore = useHubStore()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.title,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogImage: 'https://jolan.dev/images/jolan-dev.screen.png',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

const tocLinks = computed(() => {
  const bodyTags = page.value?.body?.value


  if (!bodyTags || bodyTags.length <= 0) {
    return
  }

  return bodyTags.filter(node => ['h1', 'h2'].includes(node[0])).map(node => ({ tag: node[0], id: (node[1] as Record<string, string>).id!, text: node[2]! as string}))
})

hubStore.setItemsWithDelay(
  tocLinks.value?.map(tocLink => ({ link: `#${tocLink.id}`, label: tocLink.text })) ?? [],
  {
    label: 'Universe',
    link: '/universe',
  },
)
</script>

<template>
  <div class="px-20 py-10">
    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
      </div>
    </template>
  </div>
</template>
