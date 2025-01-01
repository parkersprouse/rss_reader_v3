<template>
  <section class='p-4'>
    <h3>
      Home Page
    </h3>

    <router-link
      :to='{ name: "login" }'
      class='icon-link'
    >
      <Icon
        name='ph:sign-in-light'
        class='pr-1'
      />
      Login
    </router-link>
  </section>
</template>

<script setup lang='ts'>
</script>
