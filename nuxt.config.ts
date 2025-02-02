// https://nuxt.com/docs/api/configuration/nuxt-config

/* eslint-disable sort-keys -- Nuxt has a specifically desired key order */
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
  ],
  devtools: {
    enabled: true,
  },
  css: ['~/assets/styles/main.css'],
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'node-server',
  },
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
  tailwindcss: {
    editorSupport: true,
  },
});
/* eslint-enable sort-keys */
