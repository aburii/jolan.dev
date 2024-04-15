<script setup lang="ts">
const slideOverOpen = ref(false);
</script>

<template>
  <div class="flex">
    <div
      class="flex w-full justify-between items-center lowercase text-lg sm:text-xl font-bold"
    >
      <NuxtLink variant="link" class="hidden md:flex gap-3 items-center" to="/">
        <AppTitle size="md" />
      </NuxtLink>

      <UButton
        variant="ghost"
        class="md:hidden flex gap-3 items-center lowercase text-lg sm:text-xl font-bold"
        @click="slideOverOpen = true"
      >
        <AppTitle size="md" />
      </UButton>

      <USlideover
        v-model="slideOverOpen"
        :ui="{
          width: 'max-w-full',
          rounded: '',
        }"
        side="left"
      >
        <UCard
          class="flex flex-col flex-1"
          :ui="{
            body: { base: 'flex-1' },
            ring: '',
            rounded: '',
            divide: '',
            background: 'dark:bg-cod-gray-950',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <div class="flex gap-3 items-center text-lg font-bold lowercase">
                <AppTitle size="md" />
              </div>
              <UButton
                color="gray"
                variant="ghost"
                size="lg"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="slideOverOpen = false"
              />
            </div>
          </template>

          <AppNav
            class="md:flex md:gap-10 space-y-10"
            :horizontal="false"
            @menu-selected="slideOverOpen = false"
          />
        </UCard>
      </USlideover>
    </div>
    <AppNav class="md:flex md:gap-10 hidden" horizontal />
  </div>
</template>

<style scoped></style>
