<template>
  <main>
    <slot />
    <ThemeToggle />
  </main>
</template>

<script setup lang='ts'>
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>
