<template>
  <section class='p-4'>
    <h3>
      Home Page
    </h3>

    <router-link :to='{ name: "login" }'>
      <Icon name='ph:sign-in-light' />
      Login
    </router-link>
  </section>
</template>

<script setup lang='ts'>
</script>
