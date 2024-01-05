// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css', '~/assets/css/component.css'],
  alias: {
    '@Components': './components',
    '@Assets': './assets',
  },
})
