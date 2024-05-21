<template>
  <section class="min-h-full">
    <header class="header">
      <AppHeader class="w-full md:px-16 lg:px-24 px-4 py-2" />
    </header>
    <main class="main-wrapper">
      <section class="main-content">
        <slot />
      </section>
    </main>
  </section>
</template>

<style scoped>
.header {
  @apply fixed top-0 z-50 min-h-[var(--header-size)] flex items-center w-full;
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
