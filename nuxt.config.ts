// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: ['@vueuse/motion/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css', '~/assets/css/component.css'],
  alias: {
    '@Components': './components',
    '@Assets': './assets',
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
})
