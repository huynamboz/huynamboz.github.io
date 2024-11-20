// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: '_assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  supabase: {
    redirect: false,
  },

  routeRules: {
    '/api/**': {
      // enable CORS
      cors: true, // if enabled, also needs cors-preflight-request.ts Nitro middleware to answer CORS preflight requests
      headers: {
        // CORS headers
        'Access-Control-Allow-Origin':
          'https://hinam.nuxt.dev, https://quizzfly.site, http://localhost:5173',
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': '*', // 'Origin, Content-Type, Accept, Authorization, X-Requested-With'
        'Access-Control-Expose-Headers': '*',
        // 'Access-Control-Max-Age': '7200', // 7200 = caching 2 hours (Chromium default), https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age#directives
      },
    },
  },

  plugins: [
    {
      src: '~/plugins/vue-highlight-code',
      mode: 'client',
    },
  ],

  site: {
    url: 'https://hinam.nuxt.dev',
  },

  devtools: { enabled: true },

  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    '@nuxtjs/supabase',
    'nuxt-security',
  ],

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/_ipx/f_webp/images/docs/ecommerce-v2/thumb.png',
        '/_ipx/f_webp/images/docs/portfolio/preview.png',
      ],
    },
  },

  image: {
    format: ['webp'],
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css',
    '~/assets/css/component.css',
    'highlight.js/styles/stackoverflow-light.css',
  ],

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

  compatibilityDate: '2024-11-19',
})
