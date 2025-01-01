// https://nuxt.com/docs/api/configuration/nuxt-config

/* eslint-disable sort-keys -- Nuxt has a specifically desired key order */
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
  ],
  devtools: {
    enabled: true,
  },
  css: ['~/assets/styles/main.css'],
  compatibilityDate: '2024-11-01',
  typescript: {
    builder: 'vite',
    typeCheck: true,
  },
  eslint: {
    config: {
      standalone: true,
      stylistic: true,
      typescript: true,
      tooling: {
        jsdoc: false,
        regexp: true,
        unicorn: true,
      },
    },
  },
  icon: {
    serverBundle: {
      collections: ['ph'],
    },
  },
});
/* eslint-enable sort-keys */
