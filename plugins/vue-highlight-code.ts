import 'highlight.js/styles/stackoverflow-light.css'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/lib/common'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(hljsVuePlugin)
})
