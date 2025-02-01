<template>
  <section class='p-4'>
    <h3>
      Login
    </h3>

    <UAlert
      color='red'
      icon='i-ph-x-circle-light'
      title='You must log in'
      variant='subtle'
      class='rounded mb-4 bg-red-200 text-red-600 dark:bg-red-400 dark:text-red-400 dark:bg-opacity-15'
    />

    <router-link :to='{ name: "index" }'>
      <Icon name='ph:house-line-light' />
      Home
    </router-link>
  </section>
</template>

<script setup lang='ts'>
</script>
