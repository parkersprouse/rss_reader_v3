// https://nuxt.com/docs/api/configuration/nuxt-config

/* eslint-disable sort-keys -- Nuxt has a specifically desired key order */
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
  ],
  devtools: {
    enabled: true,
  },
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
});
/* eslint-enable sort-keys */
