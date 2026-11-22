<template>
  <div
    v-if="$slidev.nav.currentPage > 1"
    style="position: absolute; right: 1rem; bottom: 1rem; z-index: 1000; color: #fff; background: rgba(0, 0, 0, 0.6); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem; line-height: 1.25rem;"
  >
    {{ $slidev.nav.currentPage }}
  </div>
</template>
