<template>
  <section class="min-h-full">
    <header class="header" :class="{ 'header-hidden': !headerVisible }">
      <AppHeader class="w-full md:px-16 lg:px-24 px-4 py-2" />
    </header>
    <main class="main-wrapper">
      <section ref="mainContent" class="main-content">
        <slot />
      </section>
    </main>
  </section>
</template>

<script lang="ts" setup>
const scroll = useWindowScroll();
const headerVisible = ref(true);
const lastScrollY = ref(scroll.y.value);

watch(scroll.y, (value) => {
  if (value - lastScrollY.value >= 100) {
    lastScrollY.value = value;
    headerVisible.value = false;
  } else if (value - lastScrollY.value <= -100) {
    lastScrollY.value = value;
    headerVisible.value = true;
  }
});
</script>
<style scoped>
.header {
  @apply fixed z-50 min-h-[var(--header-size)] flex items-center w-full bg-white dark:bg-primary-950;
  transform: translateY(0);
  transition: ease-in-out 200ms all;
}

.header-hidden {
  transform: translateY(-100%);
}

.main-wrapper {
  height: 100vh;
  @apply relative;

  .main-content {
    @apply px-6 relative top-[var(--header-size)] md:px-16 lg:px-24;
    height: calc(100vh - var(--header-size));
  }
}
</style>
