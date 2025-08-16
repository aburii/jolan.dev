<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('blog')
  .where('published', '=', true)
  .all()
)
</script>

<template>
  <div id="blog">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 font-display">Blog</h2>
    <template v-if="posts && posts.length > 0">
      <ul class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li v-for="post in posts" :key="post.id">
          <article class="p-4 bg-neutral-800 rounded-lg h-full" :style="{ boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }">
            <NuxtLink :to="post.path" class="group">
              <h3 class="flex items-center justify-between text-lg font-bold group-hover:underline">
                <span>{{ post.title }}</span>
                <UIcon name="i-heroicons-arrow-top-right-on-square" />
              </h3>
            </NuxtLink>
            <p class="mt-2 text-sm text-neutral-400">{{ post.description }}</p>
          </article>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>No blog posts found.</p>
    </template>

  </div>
</template>

<style scoped>

</style>