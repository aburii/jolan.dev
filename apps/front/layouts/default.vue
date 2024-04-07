<script lang="ts" setup>
const curs = ref<HTMLElement | null>();

function calcPos(e: MouseEvent) {
  if (!curs.value) return;

  curs.value.style.left = e.pageX + "px";
  curs.value.style.top = e.pageY + "px";
}

function mousePressed() {
  if (!curs.value) return;

  curs.value.classList.add("active");
}

function mouseReleased() {
  if (!curs.value) return;

  curs.value.classList.remove("active");
}
</script>

<template>
  <div ref="curs" class="cursor cursor-dot"></div>
  <section
    class="wrapper"
    @mousemove="calcPos"
    @mousedown="mousePressed"
    @mouseup="mouseReleased"
  >
    <header class="header">
      <AppHeader class="h-full w-full md:px-16 lg:px-24 px-4 py-2" />
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
  @apply flex items-center top-0 z-50 fixed left-0 right-0 min-h-[var(--header-size)];
}
.main-wrapper {
  @apply px-6 md:px-16 lg:px-24 overflow-auto relative flex-grow;

  .main-content {
    @apply mt-[var(--header-size)];
    height: calc(100vh - var(--header-size));
  }
}

.wrapper {
  @apply flex min-h-full relative;

  & > * {
    mix-blend-mode: difference;
  }
}

@media (hover: none) {
  .cursor {
    display: none !important;
    pointer-events: none;
  }
}

* {
  cursor: none;
}

.cursor {
  --size: 60px;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 999;

  &.active {
    --size: 30px;
  }

  &.cursor-dot {
    background: white;
    mix-blend-mode: difference;
    transition:
      width 0.2s,
      height 0.2s,
      background-color 0.2s;
    transition-timing-function: ease-out;
  }
}
</style>
