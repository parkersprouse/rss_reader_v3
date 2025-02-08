<template>
  <ClientOnly>
    <UButton
      id='theme-toggle-btn'
      color='gray'
      variant='ghost'
      :icon='is_dark ? "ph:sun-fill" : "ph:moon-fill"'
      aria-label='Toggle Theme'
      @click='is_dark = !is_dark'
    />
    <template #fallback>
      <div class='w-8 h-8' />
    </template>
  </ClientOnly>
</template>

<script setup lang='ts'>
const color_mode = useColorMode();

const is_dark = computed({
  get() {
    return color_mode.value === 'dark';
  },
  set() {
    color_mode.preference = color_mode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<style>
#theme-toggle-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
