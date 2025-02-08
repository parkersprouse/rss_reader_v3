/**
 * Nuxt Configuration : https://nuxt.com/docs/api/configuration/nuxt-config
 */

/* eslint-disable sort-keys -- Nuxt has a specifically desired key order */
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@prisma/nuxt',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    'nuxt-security',
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: 'RSS Reader',
    },
  },
  css: ['~/assets/styles/main.css'],
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'node-server',
  },
  typescript: {
    builder: 'vite',
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
        // emitDecoratorMetadata: true,
        esModuleInterop: true,
        // experimentalDecorators: true,
        paths: {
          // Import alias to the root directory of the project
          '@/*': ['./*'],
        },
      },
    },
  },
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: '/api/auth',
    provider: {
      type: 'local',
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
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
